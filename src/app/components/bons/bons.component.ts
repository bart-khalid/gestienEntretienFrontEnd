import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng';
import {MessageService} from 'primeng/api';
import {BonsC} from '../../controller/model/bons-c.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BonsR} from '../../controller/model/bons-r.model';
import {BonsV} from '../../controller/model/bons-v.model';

@Component({
  selector: 'app-bons',
  templateUrl: './bons.component.html',
  styleUrls: ['./bons.component.css']
})
export class BonsComponent implements OnInit {
  userform: FormGroup;
  typebon: SelectItem[];
  typeselecte: string;
  colsR: any[];
  colsV: any[];
  colsC: any[];
  cancelR: boolean;
  cancelC: boolean;
  cancelV: boolean;
  displayDialogR: boolean;
  displayDialogV: boolean;
  displayDialogC: boolean;
  submitted: boolean;
  bonR = new BonsR();
  bonV = new BonsV();
  bonC = new BonsC();
  selectedBonR: BonsR;
  selectedBonV: BonsV;
  selectedBonC: BonsC;
  newbonR: boolean;
  newbonC: boolean;
  newbonV: boolean;

  bonsR = new Array<BonsR>();
  bonsV = new Array<BonsV>();
  bonsC = new Array<BonsC>();
  fourniss : SelectItem[];
  vehicule : SelectItem[];



  constructor(private fb: FormBuilder,private messageService: MessageService) {
  }

  ngOnInit() {
    this.vehicule=[
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
      {field: 'numbonC', header: 'Numero de Bon'},
      {field: 'vehiculeC', header: 'Matricule Véhicule'},
      {field: 'fournisseurC', header: 'Fournisseur'},
      {field: 'descriptionC', header: 'Désignation'},
      {field: 'prixunitaireC', header: 'Prix Unitaire'},
      {field: 'quantiteC', header: 'Quantité'},
      {field: 'typeC', header: 'Type Carburant'},
      {field: 'datebonC', header: 'Date Bon'},
      {field: 'totalbrutC', header: 'Total Brut'},
      {field: 'montantvignetteC', header: 'Montant Vignette'}
    ];
    this.colsR = [
      {field: 'numbonR', header: 'Numero de Bon'},
      {field: 'vehiculeR', header: 'Matricule Véhicule'},
      {field: 'fournisseurR', header: 'Fournisseur'},
      {field: 'descriptionR', header: 'Désignation'},
      {field: 'prixunitaireR', header: 'Prix Unitaire'},
      {field: 'quantiteR', header: 'Quantité'},
      {field: 'datebonR', header: 'Date Bon'},
      {field: 'totalbrutR', header: 'Total Brut'},
      {field: 'montantvignetteR', header: 'Montant Vignette'}
    ];

    this.colsV = [
      {field: 'numbonV', header: 'Numero de Bon'},
      {field: 'vehiculeV', header: 'Matricule Véhicule'},
      {field: 'fournisseurV', header: 'Fournisseur'},
      {field: 'descriptionV', header: 'Désignation'},
      {field: 'typehuileV', header: 'Type huile'},
      {field: 'kilometrageV', header: 'Kilométrage'},
      {field: 'prixunitaireV', header: 'Prix Unitaire'},
      {field: 'quantiteV', header: 'Quantité'},
      {field: 'datebonV', header: 'Date Bon'},
      {field: 'totalbrutV', header: 'Total Brut'},
      {field: 'montantvignetteV', header: 'Montant Vignette'}
    ];
  }

  showDialogToAddR() {
    this.newbonR = true;
    this.bonR = new BonsR();
    this.displayDialogR = true;
    this.cancelR = true;
  }

  showDialogToAddV() {
    this.newbonV = true;
    this.bonV = new BonsV();
    this.displayDialogV = true;
    this.cancelV = true;
  }

  showDialogToAddC() {
    this.newbonC = true;
    this.bonC = new BonsC();
    this.displayDialogC = true;
    this.cancelC = true;
  }

  saveR() {
    const bonr = this.bonsR;
    if (this.newbonR) {
      bonr.push(this.bonR);
    } else {
      bonr[this.bonsR.indexOf(this.selectedBonR)] = this.bonR;
    }
    this.bonsR = bonr;
    this.bonR = null;
    this.displayDialogR = false;
  }

  saveC() {
    const bonc = this.bonsC;
    if (this.newbonC) {
      bonc.push(this.bonC);
    } else {
      bonc[this.bonsC.indexOf(this.selectedBonC)] = this.bonC;
    }

    this.bonsC = bonc;
    this.bonC = null;
    this.displayDialogC = false;
  }

  saveV() {
    const bonv = this.bonsV;
    if (this.newbonV) {
      bonv.push(this.bonV);
    } else {
      bonv[this.bonsV.indexOf(this.selectedBonV)] = this.bonV;
    }

    this.bonsV = bonv;
    this.bonV = null;
    this.displayDialogV = false;
  }

  deleteR() {
    const index = this.bonsR.indexOf(this.selectedBonR);
    this.bonsR = this.bonsR.filter((val, i) => i !== index);
    this.bonR = null;
    this.displayDialogR = false;
  }

  deleteV() {
    const index = this.bonsV.indexOf(this.selectedBonV);
    this.bonsV = this.bonsV.filter((val, i) => i !== index);
    this.bonV = null;
    this.displayDialogV = false;
  }

  deleteC() {
    const index = this.bonsC.indexOf(this.selectedBonC);
    this.bonsC = this.bonsC.filter((val, i) => i !== index);
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
  cloneBonR(b: BonsR): BonsR {
    const bon = new BonsR();
    for (const prop in b) {
      bon[prop] = b[prop];
    }
    return bon;
  }
  cloneBonV(b: BonsV): BonsV {
    const bon = new BonsV();
    for (const prop in b) {
      bon[prop] = b[prop];
    }
    return bon;
  }

  onRowSelectR(event) {
    this.newbonR = false;
    this.bonR = this.cloneBonR(event.data);
    this.displayDialogR = true;
    this.cancelR = false;
  }

  onRowSelectC(event) {
    this.newbonC = false;
    this.bonC = this.cloneBonC(event.data);
    this.displayDialogC = true;
    this.cancelC = false;
  }

  onRowSelectV(event) {
    this.newbonV = false;
    this.bonV = this.cloneBonV(event.data);
    this.displayDialogV = true;
    this.cancelV = false;
  }
}
