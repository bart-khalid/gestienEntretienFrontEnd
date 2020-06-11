import { Component, OnInit } from '@angular/core';
import {ConfirmationService, Message, MessageService, SelectItem} from 'primeng/api';
import {FournisseurSV} from '../../controller/model/fournisseurSV.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FournisseurSVService} from '../../controller/service/fournisseur-sv.service';

@Component({
  selector: 'app-fournisseur-sv',
  templateUrl: './fournisseur-sv.component.html',
  styleUrls: ['./fournisseur-sv.component.css']
})
export class FournisseurSVComponent implements OnInit {
  value: boolean;
  cancel: boolean;
  displayDialog: boolean;
  submitted: boolean;
  fournisseur = new FournisseurSV();

  selectedFournisseur: FournisseurSV;

  newFournisseur: boolean;

  fournisseurs = new Array<FournisseurSV>();

  cols: any[];
  userform: FormGroup;

  typesfournisseurs: SelectItem[];
  txt = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  typeuser = localStorage.getItem('type');
  errorS: number ;
  errorC: number ;

  msgs: Message[] = [];
  constructor(private fb: FormBuilder, private messageService: MessageService, private fournisseurService: FournisseurSVService,
              private confirmationService: ConfirmationService) { }
  confirm() {
    this.confirmationService.confirm({
      message: 'Voulez-vous vraiment effectuer cette action?',
      accept: () => {
        this.delete();
      }
    });
  }
  ngOnInit() {
    if (this.typeuser === 'normal' ) {
      window.location.href = 'http://localhost:4200/accueil';
    } else {

      this.fournisseurService.findAll();
      this.userform = this.fb.group({
        nom: new FormControl('', Validators.required),
        adresse: new FormControl('', Validators.required),
        typef: new FormControl('', Validators.required),
        telephone: new FormControl('', Validators.compose([Validators.required,
          Validators.pattern(/(\+212|0|212)([ \-_/]*)(\d[ \-_/]*){9}/)])),
        email: new FormControl('', Validators.compose([Validators.required,
          Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/
          )])),
      });

      this.typesfournisseurs = [
        {label: 'Choisir un type', value: ''},
        {label: 'Matériel', value: 'matériel'},
        {label: 'Service', value: 'service'}
      ];

      this.cols = [
        {field: 'reference', header: 'Référence'},
        {field: 'nomf', header: 'Nom Fournisseur'},
        {field: 'adressef', header: 'Adresse'},
        {field: 'emailf', header: 'Adresse Mail'},
        {field: 'telephonef', header: 'Numéro de Téléphone'},
        {field: 'typef', header: 'Type Fournisseur'},
      ];
      this.fournisseurService.findAll();
    }

  }

  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({severity: 'info', summary: 'Succés', detail: 'Opération Enregistrée'});
  }

  showDialogToAdd() {
    this.newFournisseur = true;
    this.fournisseur = new FournisseurSV();
    this.displayDialog = true;
    this.cancel = true;
  }

  save() {
    const fournisseurss = this.fournisseurService.foundedFourniseurs;
    if (this.newFournisseur) {
      console.log(this.fournisseur);
      this.fournisseurService.save(this.fournisseur).subscribe(
        data => {
          this.errorS = data;
          if (this.errorS === 1) {
            console.log('success fournisseur saved');
            this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Fournisseur Enregistré'});
            this.findAll();
            this.fournisseurService.foundedFourniseurs = fournisseurss;
            this.fournisseur = null;
            this.displayDialog = false;
          } else if(this.errorS === -1 ) {
            console.log('fournisseur existe déja');
            this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'fournisseur  déja existe'});
          } else if(this.errorS === -2) {
            this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'numéro de télephone  déja existe'});
          } else if(this.errorS === -3){
            this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'email  déja existe'});
          }
        }, error => {
          console.log('error in the link to save fournisseur');
        }
      );

    } else {
      this.fournisseurService.update(this.fournisseur).subscribe(
        data => {
          this.errorS = data;
          if (this.errorS === 1) {
            console.log('fournisseur updated');
            this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Fournisseur Modifié'});
            this.findAll();
            this.fournisseurService.foundedFourniseurs = fournisseurss;
            this.fournisseur = null;
            this.displayDialog = false;
          }  else if(this.errorS === -2) {
            this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'numéro de télephone  déja existe'});
          } else if(this.errorS === -1){
            this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'email  déja existe'});
          }
        }, error => {
          console.log('error in the link');
        }
      );

    }

  }

  delete() {
    const index = this.fournisseurService.foundedFourniseurs.indexOf(this.selectedFournisseur);
    this.fournisseurService.foundedFourniseurs = this.fournisseurService.foundedFourniseurs.filter((val, i) => i !== index);
    this.fournisseurService.delete(this.selectedFournisseur.reference);
    this.messageService.add({severity: 'warn', summary: 'Succés', detail: 'Fournisseur Supprimé'});
    this.fournisseur = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newFournisseur = false;
    this.fournisseur = this.cloneFournisseur(event.data);
    this.displayDialog = true;
    this.cancel = false;
  }

  cloneFournisseur(c: FournisseurSV): FournisseurSV {
    const four = new FournisseurSV();
    for (const prop in c) {
      four[prop] = c[prop];
    }
    return four;
  }

  public findAll() {
    return this.fournisseurService.findAll();
  }

  get foundedFourniseurs(): FournisseurSV[] {
    return this.fournisseurService.foundedFourniseurs;
  }
}
