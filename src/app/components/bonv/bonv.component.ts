import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng';
import {ConfirmationService, MessageService} from 'primeng/api';
import {BonsV} from '../../controller/model/bons-v.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BonvService} from '../../controller/service/bonv.service';
import {CarService} from "../../controller/service/car.service";
import {FournisseurSVService} from "../../controller/service/fournisseur-sv.service";
import {FournisseurSV} from "../../controller/model/fournisseurSV.model";
import {Car} from "../../controller/model/car";
import {element} from "protractor";
import {FOCUS_TRAP_INERT_STRATEGY} from "@angular/cdk/a11y";
import {Entretien} from "../../controller/model/entretien.model";

@Component({
  selector: 'app-bonv',
  templateUrl: './bonv.component.html',
  styleUrls: ['./bonv.component.css']
})
export class BonvComponent implements OnInit {
  errorc: number;
  colsV: any[];
  cancelV: boolean;
  displayDialogV: boolean;
  bonV = new BonsV();
  selectedBonV: BonsV;
  newbonV: boolean;
  bonsV = new Array<BonsV>();
  fourniss: SelectItem[];
  vehicule: SelectItem[];
  userform: FormGroup;
  fournisseurs = new Array<FournisseurSV>();
  fournisseursfiltre = new Array<FournisseurSV>();
  typeuser = localStorage.getItem('type');
  cars: Car[];
  constructor(private fb: FormBuilder, private messageService: MessageService , private bonvService: BonvService,
              private carService: CarService , private fournisseurSVService: FournisseurSVService,
              private confirmationService: ConfirmationService ) { }
  confirm() {
    this.confirmationService.confirm({
      message: 'Voulez-vous vraiment effectuer cette action?',
      accept: () => {
        this.deleteV();
      }
    });
  }

  ngOnInit(): void {
    if (this.typeuser === 'employé' ) {
      window.location.href = 'http://localhost:4200/accueil';
    }

    this.userform = this.fb.group({
      numbonV: new FormControl('', Validators.required),
      vehiculeV: new FormControl('', Validators.required),
      fournisseurV: new FormControl('', Validators.required),
      descriptionV: new FormControl('', Validators.required),
      typehuileV: new FormControl('', Validators.required),
      kilometrageV: new FormControl('', Validators.required),
      prixunitaireV: new FormControl('', Validators.required),
      quantiteV: new FormControl('', Validators.required),
      datebonV: new FormControl('', Validators.required),
      totalbrutV: new FormControl('', Validators.required),
      montantvignetteV: new FormControl('', Validators.required),
    });

    this.colsV = [
      {field: 'numbonV', header: 'Nº de Bon'},
      {field: 'vehiculeassooci', header: 'Matricule Véhicule'},
      {field: 'fourniassooci', header: 'Fournisseur'},
      {field: 'descriptionV', header: 'Désignation'},
      {field: 'typehuileV', header: 'Type huile'},
      {field: 'kilometrageV', header: 'Kilométrage'},
      {field: 'prixunitaireV', header: 'Prix Unitaire'},
      {field: 'quantiteV', header: 'Quantité'},
      {field: 'datebonV', header: 'Date Bon'},
      {field: 'totalbrutV', header: 'Total Brut'},
      {field: 'montantvignetteV', header: 'Montant Vignette'}
    ];

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
        this.cars = data.reverse();
      }
    );
  }
  public find() {
    this.bonvService.findAll().subscribe(
      data => {
        this.bonsV = data.reverse();
      },
      error => {
        console.log('error find');
      });
  }

  showDialogToAddV() {
    this.newbonV = true;
    this.bonV = new BonsV();
    this.displayDialogV = true;
    this.cancelV = true;
  }
  saveV() {
    const bonv = this.bonsV;
    if (this.newbonV) {
      this.bonvService.save(this.bonV).subscribe(
        data => {
          console.log(data);
          this.errorc = data;
          if (this.errorc === 1) {
            this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Opération Enregistrée'});
            this.find();
            this.bonV = null;
            this.displayDialogV = false;
          } else if (this.errorc === -1){
            this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Numéro de bon déja existe'});
          }
        }, error => {
          console.log('error');
        }
      );
    } else {
      //  use[this.users.indexOf(this.selectedUser)] = this.user;
      bonv[this.bonsV.indexOf(this.selectedBonV)] = this.bonV;
      this.bonvService.update(this.bonV).subscribe(
        data => {
          console.log(data);
          this.messageService.add({severity: 'info', summary: 'Succés', detail: 'Opération Enregistrée'});
          this.find();
          this.bonV = null;
          this.displayDialogV = false;
        }, error => {
          console.log('error update');
        }
      );
    }
  }
  deleteV() {
    const index = this.bonsV.indexOf(this.selectedBonV);
    this.bonsV = this.bonsV.filter((val, i) => i !== index);
    this.bonvService.delete(this.selectedBonV.reference).subscribe(
      data => {
        this.messageService.add({severity: 'warn', summary: 'Succés', detail: 'Bon Carburant Supprimé'});
      },
      error => {
        console.log('error delete');
      }
    );
    this.bonV = null;
    this.displayDialogV = false;
  }
  cloneBonV(b: BonsV): BonsV {
    const bon = new BonsV();
    for (const prop in b) {
      bon[prop] = b[prop];
    }
    return bon;
  }

  onRowSelectV(event) {
    this.newbonV = false;
    this.bonV = this.cloneBonV(event.data);
    this.displayDialogV = true;
    this.cancelV = false;
  }

}
