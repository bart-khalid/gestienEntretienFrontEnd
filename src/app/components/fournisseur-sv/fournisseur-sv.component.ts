import { Component, OnInit } from '@angular/core';
import {Message, MessageService, SelectItem} from 'primeng/api';
import {FournisseurSV} from '../../controller/model/fournisseur.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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

  txt = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  errorS: number ;
  errorC: number ;

  msgs: Message[] = [];
  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.userform = this.fb.group({
      nom: new FormControl('', Validators.required),
      adresse: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.compose([Validators.required,
        Validators.pattern(/(\+212|0|212)([ \-_/]*)(\d[ \-_/]*){9}/)])),
      email: new FormControl('', Validators.compose([Validators.required,
        Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/
        )])),
    });

    this.fournisseurs = [
      { nomf: 'shell', adressef: 'boulvard abdelkarim elkhatabi', emailf: 'shell@gmail.com', telephonef: '0612134323' },
      { nomf: 'Afriqua', adressef: 'boulvard abdelkarim elkhatabi', emailf: 'afriqua@gmail.com', telephonef: '0647382947' }
    ];
    this.cols = [
      {field: 'nomf', header: 'Nom Fournisseur'},
      {field: 'adressef', header: 'Adresse'},
      {field: 'emailf', header: 'Adresse Mail'},
      {field: 'telephonef', header: 'Numero de Telephone'},
    ];
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
    const fournisseurss = this.fournisseurs;
    if (this.newFournisseur) {
      fournisseurss.push(this.fournisseur);
    } else {
      fournisseurss[this.fournisseurs.indexOf(this.selectedFournisseur)] = this.fournisseur;
    }

    this.fournisseurs = fournisseurss;
    this.fournisseur = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.fournisseurs.indexOf(this.selectedFournisseur);
    this.fournisseurs = this.fournisseurs.filter((val, i) => i !== index);
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


}
