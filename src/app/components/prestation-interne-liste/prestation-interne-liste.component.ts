import { Component, OnInit } from '@angular/core';
import {Reclamation} from '../../controller/model/reclamation.model';
import {ReclamationService} from '../../controller/service/reclamation.service';
import {PrestationInterne} from '../../controller/model/prestation-interne.model';

@Component({
  selector: 'app-prestation-interne-liste',
  templateUrl: './prestation-interne-liste.component.html',
  styleUrls: ['./prestation-interne-liste.component.css']
})
export class PrestationInterneListeComponent implements OnInit {
  value: boolean;
  cancel: boolean;
  displayDialog: boolean;

  prestationInterne = new PrestationInterne();
  prestationsInternes: PrestationInterne[];

  selectedPrestation: PrestationInterne;

  newPrestation: boolean;



  cols: any[];
  constructor(private reclamationService: ReclamationService) { }


  ngOnInit() {
    this.cols = [
      { field: 'reference', header: 'Reference' },
      { field: 'date', header: 'Date' },
      { field: 'reclamer', header: 'Reclamée ?' },
      { field: 'nomAgent', header: 'Nom Agent' },
    ];
  }
  showDialogToAdd() {
    this.newPrestation = true;
    this.prestationInterne = new PrestationInterne();
    this.displayDialog = true;
    this.cancel = true;
  }
  save() {
    const prestationsInternes = this.prestationsInternes;
    if (this.newPrestation) {
        prestationsInternes.push(this.prestationInterne);
    } else {
      prestationsInternes[this.prestationsInternes.indexOf(this.selectedPrestation)] = this.prestationInterne;
    }
    this.prestationsInternes = prestationsInternes;
    this.prestationInterne = null;
    this.displayDialog = false;

  }

  delete() {
    const index = this.prestationsInternes.indexOf(this.selectedPrestation);
    this.reclamationService.reclamationsFounded = this.reclamationService.reclamationsFounded.filter((val, i) => i !== index);
    this.prestationInterne = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newPrestation = false;
    this.prestationInterne = this.cloneReclamation(event.data);
    this.displayDialog = true;
    this.cancel = false;
  }

  cloneReclamation(p: PrestationInterne): PrestationInterne {
    const prestation = new PrestationInterne();
    for (const prop in p) {
      prestation[prop] = p[prop];
    }
    return prestation;
  }
}
