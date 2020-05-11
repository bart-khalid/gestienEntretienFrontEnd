import { Component, OnInit } from '@angular/core';
import {Reclamation} from '../../controller/model/reclamation.model';
import {ReclamationService} from '../../controller/service/reclamation.service';
import {Materiel} from '../../controller/model/materiel.model';
import {MessageService} from 'primeng';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  value: boolean;
  cancel: boolean;
  displayDialog: boolean;


  materiel = new Materiel();
  materiels = new Array<Materiel>();

  selectedMatereil: Materiel;

  newMateriel: boolean;

  userform: FormGroup;


  cols: any[];

  fournisseurs: Array<any>;
  types: Array<any>;

  dateToConvert: string;
  constructor(private fb: FormBuilder,private reclamationService: ReclamationService, private messageService: MessageService) { }


  ngOnInit() {
    this.userform = this.fb.group({
      nom: new FormControl('', Validators.required),
      marque: new FormControl('', Validators.required),
      dateachat: new FormControl('', Validators.required),
      utilite: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    });
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
    this.newMateriel = true;
    this.materiel = new Materiel();
    this.displayDialog = true;
    this.cancel = true;
  }
  save() {
    const materiels = this.materiels;
    if (this.newMateriel) {
      materiels.push(this.materiel);
      this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Opération Réussie'});
    } else {
      materiels[this.materiels.indexOf(this.selectedMatereil)] = this.materiel;
      this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Opération Réussie'});
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
    this.messageService.add({severity: 'warn', summary: 'Deleted', detail: 'Opération Réussie'});
  }

  onRowSelect(event) {
    this.newMateriel = false;
    this.materiel = this.cloneMatereil(event.data);
    this.displayDialog = true;
    this.cancel = false;
  }

  cloneMatereil(m: Materiel): Materiel {
    const materiel = new Materiel();
    for (const prop in m) {
      materiel[prop] = m[prop];
    }
    return materiel;
  }

}
