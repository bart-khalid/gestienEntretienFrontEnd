import { Component, OnInit } from '@angular/core';
import {Local} from '../../controller/model/local.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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

  userform: FormGroup;

  errorS: number ;
  errorC: number ;
  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {

    this.userform = this.fb.group({
      nom: new FormControl('', Validators.required),
      typelocal: new FormControl('', Validators.required),
      departement: new FormControl('', Validators.required),
    });

    this.cols = [
      {field: 'nomlocal', header: 'Nom Locale'},
      {field: 'typelocal', header: 'Type Locale'},
      {field: 'departement', header: 'Département'}
    ];

    this.typeslocal = [
      {label: 'Choisir un type', value: ''},
      {label: 'Amphi', value: 'Amphi'},
      {label: 'Salle', value: 'Salle'},
      {label: 'Laboratoire', value: 'Laboratoire'},
      {label: 'Bibliothèque', value: 'Bibliothèque'},
      {label: 'Espace Commun', value: 'Espace Commun'},
      {label: 'Salle de Lecture', value: 'Salle de Lecture'},
      {label: 'Autre', value: 'Autre'},
      ];

    this.typesDepartement = [
      {label: 'Choisir un type', value: ''},
      {label: 'Département Informatique', value: 'Informatique'},
      {label: 'Département Physique', value: 'Physique'},
      {label: 'Département Chimie', value: 'Chimie'},
      {label: 'Département Mathématique', value: 'Mathématique'},
      {label: 'Département Biologie', value: 'Biologie'},
      {label: 'Département Géologie', value: 'Géologie'},
      {label: 'Département Tec', value: 'Tec'},
      {label: 'Département Génie Civil', value: 'Génie Civil'},
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
