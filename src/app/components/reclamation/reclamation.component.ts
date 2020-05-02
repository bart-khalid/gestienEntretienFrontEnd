import { Component, OnInit } from '@angular/core';
import {Car} from '../../controller/model/car';
import {CarService} from '../../controller/service/car.service';
import {Reclamation} from '../../controller/model/reclamation.model';
import {ReclamationService} from '../../controller/service/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  value: boolean;
  cancel: boolean;
  displayDialog: boolean;

  reclamation = new Reclamation();

  selectedReclamation: Reclamation;

  newReclamation: boolean;

  reclamations = new Array<Reclamation>();

  cols: any[];

  locales: Array<any>;
  selectedLocale: string;

  constructor(private reclamationService: ReclamationService) { }

  ngOnInit() {
    this.reclamationService.getReclamationsSmall().then(reclamations => this.reclamations = reclamations);

    this.cols = [
      { field: 'reference', header: 'Reference' },
      { field: 'objet', header: 'Objet' },
      { field: 'description', header: 'Description' },
      { field: 'nomLocale', header: 'NomLocale' }
    ];

    this.locales = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
  }

  showDialogToAdd() {
    this.newReclamation = true;
    this.reclamation = new Reclamation();
    this.displayDialog = true;
    this.cancel = true;
  }

  save() {
    const reclaations = this.reclamations;
    if (this.newReclamation) {
      reclaations.push(this.reclamation);
      } else {
      reclaations[this.reclamations.indexOf(this.selectedReclamation)] = this.reclamation;
    }

    this.reclamations = reclaations;
    this.reclamation = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.reclamations.indexOf(this.selectedReclamation);
    this.reclamations = this.reclamations.filter((val, i) => i !== index);
    this.reclamation = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newReclamation = false;
    this.reclamation = this.cloneReclamation(event.data);
    this.displayDialog = true;
    this.cancel = false;
  }

  cloneReclamation(r: Reclamation): Reclamation {
    const reclamation = new Reclamation();
    for (const prop in r) {
      reclamation[prop] = r[prop];
    }
    return reclamation;
  }
}
