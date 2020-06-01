import { Component, OnInit } from '@angular/core';
import {Local} from '../../controller/model/local.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ConfirmationService, MessageService, SelectItem} from 'primeng/api';
import {LocalService} from '../../controller/service/local.service';

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
  constructor(private fb: FormBuilder, private messageService: MessageService, private localService: LocalService,
              private confirmationService: ConfirmationService) { }
  confirm() {
    this.confirmationService.confirm({
      message: 'Voulez-vous vraiment effectuer cette action?',
      accept: () => {
        this.delete();
      }
    });
  }
  ngOnInit(): void {
    this.localService.findAll();
    this.userform = this.fb.group({
      nom: new FormControl('', Validators.required),
      typelocal: new FormControl('', Validators.required),
      departement: new FormControl('', Validators.required),
    });



    this.cols = [
      {field: 'nomLocal', header: 'Nom Local'},
      {field: 'typeLocal', header: 'Type Local'},
      {field: 'departement', header: 'Département'},
      {field: 'nbrMateriel', header: 'Nombre Matériels affectés'}
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
      {label: 'Autre', value: 'Autre'},
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
    const localls = this.localService.foudedLocales;
    if (this.newLocal) {
  //    localls.push(this.local);
      this.localService.save(this.local);
      this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Locale Enregistré'});
    } else {
//    localls[this.localService.foudedLocales.indexOf(this.selectedLocal)] = this.local;
      this.localService.update(this.local);
      this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Locale Modifié'});
    }

    this.locals = localls;
    this.local = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.localService.foudedLocales.indexOf(this.selectedLocal);
    this.localService.foudedLocales = this.localService.foudedLocales.filter((val, i) => i !== index);
    this.localService.delete(this.selectedLocal.reference);
    this.messageService.add({severity: 'warn', summary: 'Succés', detail: 'Locale Supprimé'});
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

  get foudedLocales(): Local[] {
    return this.localService.foudedLocales;
  }
}
