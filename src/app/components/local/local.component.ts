import { Component, OnInit } from '@angular/core';
import {FournisseurSV} from '../../controller/model/fournisseur-sv.model';
import {Local} from '../../controller/model/local.model';
import {FormBuilder} from '@angular/forms';
import {MessageService, SelectItem} from 'primeng/api';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  value: boolean;
  cancel: boolean;
  displayDialog: boolean;
  submitted: boolean;
  local = new Local();

  selectedLocal: Local;

  newLocal: boolean;

  locals = new Array<Local>();

  cols: any[];

  typeslocal: SelectItem[];

  typesDepartement: SelectItem[];

  errorS: number ;
  errorC: number ;
  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {
    this.cols = [
      {field: 'nomlocal', header: 'Nom Locale'},
      {field: 'typelocal', header: 'Type Locale'},
      {field: 'departement', header: 'Département'}
    ];

    this.typeslocal = [
      {label: 'Selectionnez un type', value: null},
      {label: 'Amphi', value: 'Amphi'},
      {label: 'Salle', value: 'Salle'},
      {label: 'Laboratoire', value: 'Laboratoire'},
      {label: 'Bibliothèque', value: 'Bibliothèque'},
      {label: 'Espace Commun', value: 'Espace Commun'},
      {label: 'Salle de Lecture', value: 'Salle de Lecture'},
      {label: 'Autre', value: 'Autre'},
      ];

    this.typesDepartement = [
      {label: 'Selectionnez un type', value: null},
      {label: 'Departement Informatique', value: 'Informatique'},
      {label: 'Departement Physique', value: 'Physique'},
      {label: 'Departement Chimie', value: 'Chimie'},
      {label: 'Departement Mathématique', value: 'Mathématique'},
      {label: 'Departement Biologie', value: 'Biologie'},
      {label: 'Departement Géologie', value: 'Géologie'},
      {label: 'Departement Tec', value: 'Tec'},
      {label: 'Departement Génie Civil', value: 'Génie Civil'},
      {label: 'Autre', value: 'autre'},
    ];
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({severity: 'info', summary: 'Succés', detail: 'Opération Enregistrée'});
  }

  showDialogToAdd() {
    this.newLocal = true;
    this.local = new Local();
    this.displayDialog = true;
    this.cancel = true;
  }

  save() {
    const localls = this.locals;
    if (this.newLocal) {
      localls.push(this.local);
    } else {
      localls[this.locals.indexOf(this.selectedLocal)] = this.local;
    }

    this.locals = localls;
    this.local = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.locals.indexOf(this.selectedLocal);
    this.locals = this.locals.filter((val, i) => i !== index);
    this.local = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newLocal = false;
    this.local = this.cloneLocal(event.data);
    this.displayDialog = true;
    this.cancel = false;
  }

  cloneLocal(c: Local): Local {
    const local = new Local();
    for (const prop in c) {
      local[prop] = c[prop];
    }
    return local;
  }

}
