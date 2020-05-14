import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng";
import {BonsR} from "../../controller/model/bons-r.model";
import {MessageService} from "primeng/api";
import {BonsV} from "../../controller/model/bons-v.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
  userform: FormGroup;


  constructor(private fb: FormBuilder,private messageService: MessageService) { }

  ngOnInit(): void {
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
