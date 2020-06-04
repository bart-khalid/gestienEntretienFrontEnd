import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng';
import {ConfirmationService, MessageService} from 'primeng/api';
import {BonsC} from '../../controller/model/bons-c.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BonsR} from '../../controller/model/bons-r.model';
import {BonsV} from '../../controller/model/bons-v.model';
import {BoncService} from '../../controller/service/bonc.service';
import {CarService} from "../../controller/service/car.service";
import {FournisseurSVService} from "../../controller/service/fournisseur-sv.service";
import {FournisseurSV} from "../../controller/model/fournisseurSV.model";
import {Car} from "../../controller/model/car";

@Component({
  selector: 'app-bons',
  templateUrl: './bons.component.html',
  styleUrls: ['./bons.component.css']
})
export class BonsComponent implements OnInit {
  userform: FormGroup;
  colsC: any[];
  cancelC: boolean;
  displayDialogC: boolean;
  bonC = new BonsC();
  selectedBonC: BonsC;
  newbonC: boolean;
  bonsC = new Array<BonsC>();
  fourniss: SelectItem[];
  vehicule: SelectItem[];
  errorc: number;
  cars: Car[];
  fournisseurs = new Array<FournisseurSV>();
  fournisseursfiltre = new Array<FournisseurSV>();
  typeuser = localStorage.getItem('type');

  constructor(private fb: FormBuilder, private messageService: MessageService, private boncService: BoncService,
              private carService: CarService , private fournisseurSVService: FournisseurSVService,
              private confirmationService: ConfirmationService) {
  }
  confirm() {
    this.confirmationService.confirm({
      message: 'Voulez-vous vraiment effectuer cette action?',
      accept: () => {
        this.deleteC();
      }
    });
  }
  ngOnInit() {
    if (this.typeuser === 'normal' ) {
      window.location.href = 'http://localhost:4200/accueil';
    } else {
      this.vehicule = [
        {label: 'Selectionnez une véhicule', value: ''},
        {label: 'V1', value: 'v1'},
        {label: 'V2', value: 'v2'},
        {label: 'V3', value: 'v3'}
      ];

      this.fourniss = [
        {label: 'Selectionnez un fournisseur', value: ''},
        {label: 'fournisseur 1', value: 'f1'},
        {label: 'fournisseur 2', value: 'f2'},
        {label: 'fournisseur 3', value: 'f3'}
      ];


      this.userform = this.fb.group({
        numbonC: new FormControl('', Validators.required),
        vehiculeC: new FormControl('', Validators.required),
        fournisseurC: new FormControl('', Validators.required),
        descriptionC: new FormControl('', Validators.required),
        prixunitaireC: new FormControl('', Validators.required),
        quantiteC: new FormControl('', Validators.required),
        typeC: new FormControl('', Validators.required),
        datebonC: new FormControl('', Validators.required),
        totalbrutC: new FormControl('', Validators.required),
        montantvignetteC: new FormControl('', Validators.required),
      });
      this.colsC = [
        {field: 'numbonC', header: 'Nº de Bon'},
        {field: 'vehiculeassooci', header: 'Matricule Véhicule'},
        {field: 'fourniassooci', header: 'Fournisseur'},
        {field: 'descriptionC', header: 'Désignation'},
        {field: 'prixunitaireC', header: 'Prix Unitaire'},
        {field: 'quantiteC', header: 'Quantité'},
        {field: 'typeC', header: 'Type Carburant'},
        {field: 'datebonC', header: 'Date Bon'},
        {field: 'totalbrutC', header: 'Total Brut'},
        {field: 'montantvignetteC', header: 'Montant Vignette'}
      ];
      this.find();
      this.fournisseurSVService.find().subscribe(
        data => {
          for (const f of data) {
            if (f.typef === 'service') {
              this.fournisseursfiltre.push(f);
            }
          }
          this.fournisseurs = this.fournisseursfiltre;
          console.log(this.fournisseurs.length + 'data');
        }
      );

      this.carService.findAll().subscribe(
        data => {
          this.cars = data;
        }
      );
    }
  }

  public find() {
    this.boncService.findAll().subscribe(
      data => {
        this.bonsC = data.reverse();
      },
      error => {
        console.log('error find');
      });
  }

  showDialogToAddC() {
    this.newbonC = true;
    this.bonC = new BonsC();
    this.displayDialogC = true;
    this.cancelC = true;
  }

  saveC() {
    const bonr = this.bonsC;
    if (this.newbonC) {
      this.boncService.save(this.bonC).subscribe(
        data => {
          console.log(data);
          this.errorc = data;
          if (this.errorc === 1) {
            this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Opération Enregistrée'});
            this.find();
            this.bonC = null;
            this.displayDialogC = false;
          } else if (this.errorc === -1){
            this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Numéro de bon déja existe'});
          }
        }, error => {
          console.log('error');
        }
      );
    } else {
      //  use[this.users.indexOf(this.selectedUser)] = this.user;
      bonr[this.bonsC.indexOf(this.selectedBonC)] = this.bonC;
      this.boncService.update(this.bonC).subscribe(
        data => {
          console.log(data);
          this.messageService.add({severity: 'info', summary: 'Succés', detail: 'Opération Enregistrée'});
          this.find();
          this.bonC = null;
          this.displayDialogC = false;
        }, error => {
          console.log('error update');
        }
      );
    }
  }

  deleteC() {
    const index = this.bonsC.indexOf(this.selectedBonC);
    this.bonsC = this.bonsC.filter((val, i) => i !== index);
    this.boncService.delete(this.selectedBonC.reference).subscribe(
      data => {
        this.messageService.add({severity: 'warn', summary: 'Succés', detail: 'Bon Carburant Supprimé'});
      },
      error => {
        console.log('error delete');
      }
    );
    this.bonC = null;
    this.displayDialogC = false;
  }

  cloneBonC(b: BonsC): BonsC {
    const bon = new BonsC();
    for (const prop in b) {
      bon[prop] = b[prop];
    }
    return bon;
  }
  onRowSelectC(event) {
    this.newbonC = false;
    this.bonC = this.cloneBonC(event.data);
    this.displayDialogC = true;
    this.cancelC = false;
  }

}
