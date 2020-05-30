import { Component, OnInit } from '@angular/core';
import {PrestationExterne} from '../../controller/model/prestation-externee.model';
import {ReclamationService} from '../../controller/service/reclamation.service';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PrestationExterneService} from '../../controller/service/prestation-externe.service';
import {Reclamation} from '../../controller/model/reclamation.model';
import {Local} from '../../controller/model/local.model';
import {LocalService} from '../../controller/service/local.service';
import {error} from '@angular/compiler/src/util';
import {ToastrService} from 'ngx-toastr';

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
  selectedPrestationExteerne: PrestationExterne;

  newPrestation: boolean;

  cols: any[];
  entretiens: any[];

  userform1: FormGroup;

  constructor(private fb: FormBuilder, private reclamationService: ReclamationService,
              private localService: LocalService,
              private toast: ToastrService,
              private prestationExterneService: PrestationExterneService) { }


  ngOnInit() {

    this.prestationExterneService.findAll();
    this.reclamationService.findAllReclamationsNonTraiter();
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
      { value: 'materiel', label: 'Matériel' },
      { value: 'jardinage', label: 'Jardinage' },
      { value: 'electricité', label: 'Electricité' },
      { value: 'plomberie', label: 'Plomberie' },
      { value: 'télephone', label: 'Télephone' },
      { value: 'minuiserie', label: 'Minuiserie' },
      { value: 'internet', label: 'Internet' },
    ];
  }
  save() {
    console.log(this.prestationExterne.materielLocale);
    this.updatePrestationE(this.prestationExterne);
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
    return this.reclamationService.foundedReclamationsNonTraiter;
  }
  get foundedLocales(): Local[] {
    return this.localService.foudedLocales;
  }
  updatePrestationE(prestationE: PrestationExterne) {
    this.prestationExterneService.update(prestationE).subscribe(
      data => {
        if (data === 0) {
          this.toast.warning('merci de choisir le materiel');
        } else if (data === -1) {
          this.toast.warning('merci de choisir le materiel');
        } else if (data === -2) {
          this.toast.warning('merci de choisir le locale');
        } else if (data === -3) {
          this.toast.warning('merci de choisir la reclamation');
        } else if (data === -4) {
          this.toast.warning('merci de completer les champs du bos de commande');
        } else if (data === -5) {
          this.toast.warning('merci de completer les champs du bos de livraison');
        } else if (data === -6) {
          this.toast.warning('vous ne pouvez pas changer le type de la prestation à materiel ');
        } else if (data === -7) {
          this.toast.warning('vous ne pouvez pas changer le type de la prestation');
        } else if (data === -8) {
          this.toast.warning('vous ne pouvez pas retirer le bon commande de cette prestation');
        } else if (data === -9) {
          this.toast.warning('vous ne pouvez pas retirer le bon livraison de cette prestation');
        } else if (data === -10) {
          this.toast.warning('vous ne pouvez pas retirer la reclamation de cette prestation');
        } else {
          this.toast.success('Prestation Externe Modifiée');
          this.prestationExterneService.findAll();
          this.reclamationService.findAllReclamationsNonTraiter();
          this.prestationExterne = null;
          this.displayDialog = false;
          }
      }, error1 => {
        console.log('error in the link');
        this.toast.error('erreur merci de recharger la page');
      }
    );
  }
}
