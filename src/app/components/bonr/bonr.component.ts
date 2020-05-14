import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng";
import {BonsR} from "../../controller/model/bons-r.model";
import {MessageService} from "primeng/api";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-bonr',
  templateUrl: './bonr.component.html',
  styleUrls: ['./bonr.component.css']
})
export class BonrComponent implements OnInit {
  userform: FormGroup;
  typebon: SelectItem[];
  typeselecte: string;
  colsR: any[];
  cancelR: boolean;
  displayDialogR: boolean;
  bonR = new BonsR();
  selectedBonR: BonsR;
  newbonR: boolean;
  bonsR = new Array<BonsR>();
  fourniss: SelectItem[];
  vehicule: SelectItem[];
  constructor(private fb: FormBuilder,private messageService: MessageService) { }

  ngOnInit(): void {
    this.userform = this.fb.group({
      numbonR: new FormControl('', Validators.required),
      vehiculeR: new FormControl('', Validators.required),
      fournisseurR: new FormControl('', Validators.required),
      descriptionR: new FormControl('', Validators.required),
      prixunitaireR: new FormControl('', Validators.required),
      quantiteR: new FormControl('', Validators.required),
      datebonR: new FormControl('', Validators.required),
      totalbrutR: new FormControl('', Validators.required),
      montantvignetteR: new FormControl('', Validators.required),
    });
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
    this.vehicule =[
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
  showDialogToAddR() {
    this.newbonR = true;
    this.bonR = new BonsR();
    this.displayDialogR = true;
    this.cancelR = true;
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
  deleteR() {
    const index = this.bonsR.indexOf(this.selectedBonR);
    this.bonsR = this.bonsR.filter((val, i) => i !== index);
    this.bonR = null;
    this.displayDialogR = false;
  }
  cloneBonR(b: BonsR): BonsR {
    const bon = new BonsR();
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
}
