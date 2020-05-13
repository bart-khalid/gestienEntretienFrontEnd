import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService, SelectItem} from 'primeng/api';
import {Reclamation} from '../../controller/model/reclamation.model';
import {ReclamationService} from '../../controller/service/reclamation.service';

@Component({
  selector: 'app-reclamer',
  templateUrl: './reclamer.component.html',
  styleUrls: ['./reclamer.component.css']
})
export class ReclamerComponent implements OnInit {
  value: boolean;
  cancel: boolean;
  displayDialog: boolean;
  displayDialogM: boolean;

  reclamation = new Reclamation();

  selectedReclamation: Reclamation;

  newReclamation: boolean;

  userform: FormGroup;
  userform1: FormGroup;


  cols: any[];

  locales: Array<any>;
  materiels: Array<any>;
  constructor(private fb: FormBuilder,private reclamationService: ReclamationService, private messageService: MessageService) { }


  ngOnInit() {
    this.reclamationService.findAll();
    this.cols = [
      { field: 'reference', header: 'Reference' },
      { field: 'reclamentName', header: 'Reclament' },
      { field: 'date', header: 'Date' },
      { field: 'objet', header: 'Objet' },
      { field: 'description', header: 'Description' },
      { field: 'nomLocale', header: 'Locale' },
      { field: 'nomMateriel', header: 'Materiel' },
      { field: 'etat', header: 'Etat' }
    ];
    this.locales = [
      { value: '', label: 'Choisir un locale' },
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];

    this.materiels = [
      { value: '', label: 'Choisir un matériel' },
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];

    this.userform = this.fb.group({
      objet: new FormControl('', Validators.required),
      local: new FormControl('', Validators.required),
      description : new FormControl('', Validators.required),
    });


    this.userform1 = this.fb.group({
      objett: new FormControl('', Validators.required),
      locale: new FormControl('', Validators.required),
      mater: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
    });

  }
  showDialogToAdd() {
    this.newReclamation = true;
    this.reclamation = new Reclamation();
    this.displayDialog = true;
    this.displayDialogM = false;
    this.cancel = true;
  }

  showDialogToAddM() {

    this.newReclamation = true;
    this.reclamation = new Reclamation();
    this.displayDialogM = true;
    this.displayDialog = false;
    this.cancel = true;
  }

  save() {
    const reclamations = this.reclamationService.reclamationsFounded;
    if (this.newReclamation) {
      this.reclamationService.save(this.reclamation, 'khalid');
      reclamations.push(this.reclamation);
      this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Opération Réussie'});
    } else {
      reclamations[this.reclamationService.reclamationsFounded.indexOf(this.selectedReclamation)] = this.reclamation;
      this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Opération Réussie'});
    }
    this.reclamationService.reclamationsFounded = reclamations;
    this.reclamation = null;
    this.displayDialog = false;
    this.displayDialogM = false;

  }

  delete() {
    const index = this.reclamationService.reclamationsFounded.indexOf(this.selectedReclamation);
    this.reclamationService.reclamationsFounded = this.reclamationService.reclamationsFounded.filter((val, i) => i !== index);
    this.reclamation = null;
    this.displayDialog = false;
    this.displayDialogM = false;
    this.messageService.add({severity: 'warn', summary: 'Deleted', detail: 'Opération Réussie'});
  }

  onRowSelect(event) {
    this.newReclamation = false;
    this.reclamation = this.cloneReclamation(event.data);
    if (this.reclamation.nomMateriel === '' || this.reclamation.nomMateriel == null) {
      this.displayDialog = true;
    } else {
      this.displayDialogM = true;
    }
    this.cancel = false;
  }

  cloneReclamation(r: Reclamation): Reclamation {
    const reclamation = new Reclamation();
    for (const prop in r) {
      reclamation[prop] = r[prop];
    }
    return reclamation;
  }

  get reclamationsFounded(): Reclamation[] {
    return this.reclamationService.reclamationsFounded;
  }
}
