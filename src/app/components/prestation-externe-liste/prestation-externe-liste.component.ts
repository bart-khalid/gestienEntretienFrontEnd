import { Component, OnInit } from '@angular/core';
import {PrestationExterne} from '../../controller/model/prestation-Externe.model';
import {ReclamationService} from '../../controller/service/reclamation.service';
import {PrestationInterne} from '../../controller/model/prestation-interne.model';

@Component({
  selector: 'app-prestation-externe-liste',
  templateUrl: './prestation-externe-liste.component.html',
  styleUrls: ['./prestation-externe-liste.component.css']
})
export class PrestationExterneListeComponent implements OnInit {

  value: boolean;
  cancel: boolean;
  displayDialog: boolean;


  prestationExterne: PrestationExterne;
  prestationsExterne: PrestationExterne[];
  selectedPrestationExteerne: PrestationExterne;

  newPrestation: boolean;

  cols: any[];
  entretiens: any[];
  constructor(private reclamationService: ReclamationService) { }


  ngOnInit() {
    this.cols = [
      { field: 'reference', header: 'Reference' },
      { field: 'typeEntretien', header: 'Entretien' },
      { field: 'date', header: 'Date' },
      { field: 'nomPrestataire', header: 'Prestataire' },
      { field: 'numeroFac', header: 'Numero Fecture' },
      { field: 'montantFac', header: 'Montant' },
      { field: 'reclamed', header: 'Reclamée ?' },
      { field: 'bonCommande', header: 'Avec bonCommande ?' },
      { field: 'bonLivraison', header: 'Avec bonLivraison ?' },
    ];
    this.entretiens = [
      {value: 'jardinage', label: 'Jardinage'},
      {value: 'autre', label: 'Autre'}
    ];
  }
  showDialogToAddE() {
    this.newPrestation = true;
    this.prestationExterne = new PrestationExterne();
    this.displayDialog = true;
  }

  save() {
    const prestationsExternes = this.prestationsExterne;
    if (this.newPrestation) {
      prestationsExternes.push(this.prestationExterne);
    } else {
      prestationsExternes[this.prestationsExterne.indexOf(this.selectedPrestationExteerne)] = this.prestationExterne;
    }
    this.prestationsExterne = prestationsExternes;
    this.prestationExterne = null;
    this.displayDialog = false;

  }
  delete() {
    const index = this.prestationsExterne.indexOf(this.selectedPrestationExteerne);
    this.prestationsExterne = this.prestationsExterne.filter((val, i) => i !== index);
    this.prestationExterne = null;
    this.displayDialog = false;
  }
  onRowSelect(event) {
    this.newPrestation = false;
    this.prestationExterne = this.clonePrestationExterne(event.data);
    this.displayDialog = true;
    this.cancel = false;
  }
  clonePrestationExterne(p: PrestationExterne): PrestationExterne {
    const prestation = new PrestationExterne();
    for (const prop in p) {
      prestation[prop] = p[prop];
    }
    return prestation;
  }
}