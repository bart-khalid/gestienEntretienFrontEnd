import { Component, OnInit } from '@angular/core';
import {Reclamation} from '../../controller/model/reclamation.model';
import {ReclamationService} from '../../controller/service/reclamation.service';
import {Materiel} from '../../controller/model/materiel.model';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  value: boolean;
  cancel: boolean;
  displayDialog: boolean;
  displayDialogM: boolean;

  materiel = new Materiel();
  materiels = new Array<Materiel>();

  selectedMatereil: Materiel;

  newReclamation: boolean;



  cols: any[];

  fournisseurs: Array<any>;
  types: Array<any>;
  constructor(private reclamationService: ReclamationService) { }


  ngOnInit() {
    this.reclamationService.findAll();
    this.cols = [
      { field: 'reference', header: 'Reference' },
      { field: 'marque', header: 'Marque' },
      { field: 'nom', header: 'Nom' },
      { field: 'dateAchat', header: 'DateAchat' },
      { field: 'nbrEntite', header: 'NbrEntite' },
      { field: 'type', header: 'Type' }
    ];
    this.fournisseurs = [
      { value: '0', label: 'choose a fournisseur' },
      { value: '1', label: 'fournisseur 1' },
      { value: '2', label: 'fournisseur 2' },
      { value: '3', label: 'fournisseur 3' },
    ];

    this.types = [
      { value: '0', label: 'choose a type' },
      { value: 'Informatique', label: 'Informatique ' },
      { value: 'Enseignement', label: 'Enseignement ' }
    ];
  }
  showDialogToAdd() {
    this.newReclamation = true;
    this.materiel = new Materiel();
    this.displayDialog = true;
    this.displayDialogM = false;
    this.cancel = true;
  }
  save() {
    const materiels = this.materiels;
    if (this.newReclamation) {
      materiels.push(this.materiel);
    } else {
      materiels[this.materiels.indexOf(this.selectedMatereil)] = this.materiel;
    }
    this.materiels = materiels;
    this.materiel = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.materiels.indexOf(this.selectedMatereil);
    this.materiels = this.materiels.filter((val, i) => i !== index);
    this.materiel = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newReclamation = false;
    this.materiel = this.cloneMatereil(event.data);
    this.displayDialog = true;
    this.cancel = false;
  }

  cloneMatereil(r: Materiel): Materiel {
    const reclamation = new Materiel();
    for (const prop in r) {
      reclamation[prop] = r[prop];
    }
    return reclamation;
  }

}
