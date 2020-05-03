import { Component, OnInit } from '@angular/core';
import {Car} from '../../controller/model/car';
import {CarService} from '../../controller/service/car.service';
import {Reclamation} from '../../controller/model/reclamation.model';
import {ReclamationService} from '../../controller/service/reclamation.service';
import {MenuItem, SelectItem} from 'primeng';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  value: boolean;
  cancel: boolean;
  displayDialog: boolean;
  displayDialogM: boolean;

  reclamation = new Reclamation();

  selectedReclamation: Reclamation;

  newReclamation: boolean;



  cols: any[];

  locales: Array<any>;
  constructor(private reclamationService: ReclamationService) { }


  ngOnInit() {
    this.reclamationService.findAll();
    this.cols = [
      { field: 'reference', header: 'Reference' },
      { field: 'date', header: 'Date' },
      { field: 'objet', header: 'Objet' },
      { field: 'description', header: 'Description' },
      { field: 'nomLocale', header: 'Locale' },
      { field: 'nomMateriel', header: 'NomMateriel' }
    ];
    this.locales = [
      { value: '0', label: 'locale' },
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
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
      reclamations.push(this.reclamation);
      } else {
      reclamations[this.reclamationService.reclamationsFounded.indexOf(this.selectedReclamation)] = this.reclamation;
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
