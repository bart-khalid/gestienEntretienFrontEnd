import { Component, OnInit } from '@angular/core';
import {PrestationExterne} from '../../controller/model/prestation-externee.model';
import {ReclamationService} from '../../controller/service/reclamation.service';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PrestationExterneService} from '../../controller/service/prestation-externe.service';
import {Reclamation} from '../../controller/model/reclamation.model';
import {Local} from '../../controller/model/local.model';
import {LocalService} from '../../controller/service/local.service';

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
  prestationsExternes: PrestationExterne[];
  selectedPrestationExteerne: PrestationExterne;

  newPrestation: boolean;

  cols: any[];
  entretiens: any[];

  userform1: FormGroup;

  constructor(private fb: FormBuilder, private reclamationService: ReclamationService,
              private localService: LocalService,
              private prestationExterneService: PrestationExterneService) { }


  ngOnInit() {

    this.prestationExterneService.findAll();
    this.reclamationService.findAll();
    this.localService.findAll();

    this.userform1 = this.fb.group({
      typeEntretienn: new FormControl('', Validators.required),
      locale: new FormControl('', Validators.required),
      datee: new FormControl('', Validators.required),
      nomprestataire: new FormControl('', Validators.required),
      montant: new FormControl('', Validators.required),
    });

    this.cols = [
      { field: 'referenceE', header: 'Reference' },
      { field: 'typeEntretienE', header: 'Entretien' },
      { field: 'dateE', header: 'Date' },
      { field: 'nomLocale', header: 'Locale' },
      { field: 'nomMateriel', header: 'Materiel' },
      { field: 'nomPrestataireE', header: 'Prestataire' },
      { field: 'numeroFacE', header: 'Numero Facture' },
      { field: 'montantFacE', header: 'Montant' },
      { field: 'reclamedE', header: 'Réclamée ?' },
      { field: 'bonCommandeE', header: 'Avec bon Commande ?' },
      { field: 'bonLivraisonE', header: 'Avec bon Livraison ?' },
    ];
    this.entretiens = [
      { value: '', label: 'Choisir un type' },
      { value: 'jardinage', label: 'Jardinage' },
      { value: 'materiel', label: 'Entretien Materiel' },
    ];
  }
  showDialogToAddE() {
    this.newPrestation = true;
    this.prestationExterne = new PrestationExterne();
    this.displayDialog = true;
  }

  save() {
    const prestationsExterness = this.prestationsExternes;
    if (this.newPrestation) {
      prestationsExterness.push(this.prestationExterne);
    } else {
      prestationsExterness[this.prestationsExternes.indexOf(this.selectedPrestationExteerne)] = this.prestationExterne;
    }
    this.prestationsExternes = prestationsExterness;
    this.prestationExterne = null;
    this.displayDialog = false;

  }
  delete() {
    this.prestationExterneService.delete(this.selectedPrestationExteerne.referenceE);
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
  get foundedPrestationExternes(): PrestationExterne[] {
    return this.prestationExterneService.foundedPrestationExternes;
  }
  get foundedReclamations(): Reclamation[] {
    return this.reclamationService.reclamationsFounded;
  }
  get foundedLocales(): Local[] {
    return this.localService.foudedLocales;
  }
}
