import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng";
import {BonsR} from "../../controller/model/bons-r.model";
import {MessageService} from "primeng/api";
import {BonsV} from "../../controller/model/bons-v.model";

@Component({
  selector: 'app-bonv',
  templateUrl: './bonv.component.html',
  styleUrls: ['./bonv.component.css']
})
export class BonvComponent implements OnInit {
  typebon: SelectItem[];
  typeselecte: string;
  colsV: any[];
  cancelV: boolean;
  displayDialogV: boolean;
  bonV = new BonsV();
  selectedBonV: BonsV;
  newbonV: boolean;
  bonsV = new Array<BonsV>();
  fourniss : SelectItem[];
  vehicule : SelectItem[];
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.vehicule=[
      {label: 'Selectionnez une véhicule', value: null},
      {label: 'V1', value: 'v1'},
      {label: 'V2', value: 'v2'},
      {label: 'V3', value: 'v3'}
    ];

    this.fourniss = [
      {label: 'Selectionnez un fournisseur', value: null},
      {label: 'fournisseur 1', value: 'f1'},
      {label: 'fournisseur 2', value: 'f2'},
      {label: 'fournisseur 3', value: 'f3'}
    ];
    this.colsV = [
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
      bonv.push(this.bonV);
    } else {
      bonv[this.bonsV.indexOf(this.selectedBonV)] = this.bonV;
    }
    this.bonsV = bonv;
    this.bonV = null;
    this.displayDialogV = false;
  }
  deleteV() {
    const index = this.bonsV.indexOf(this.selectedBonV);
    this.bonsV = this.bonsV.filter((val, i) => i !== index);
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
