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
import {PresBonLivraison} from '../../controller/model/pres-bon-livraison.model';
import {PresBonCommande} from '../../controller/model/pres-bon-commande.model';
import {ConfirmationService, MessageService} from "primeng/api";

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
  typeuser = localStorage.getItem('type');

  constructor(private fb: FormBuilder, private reclamationService: ReclamationService,
              private localService: LocalService,
              private toast: ToastrService,
              private prestationExterneService: PrestationExterneService,
              private confirmationService: ConfirmationService) { }
  confirm() {
    this.confirmationService.confirm({
      message: 'Voulez-vous vraiment effectuer cette action?',
      accept: () => {
        this.delete();
      }
    });
  }

  ngOnInit() {
    if (this.typeuser === 'normal' ) {
      window.location.href = 'http://localhost:4200/accueil';
    } else {
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
        { field: 'referenceE', header: 'Référence' },
        { field: 'typeEntretienE', header: 'Entretien' },
        { field: 'dateE', header: 'Date' },
        { field: 'nomLocale', header: 'Local' },
        { field: 'nomMateriel', header: 'Matériel' },
        { field: 'nomPrestataireE', header: 'Prestataire' },
        { field: 'numeroFacE', header: 'Numéro Facture' },
        { field: 'montantFacE', header: 'Montant' },
        { field: 'etatBooleanRec', header: 'Réclamée ?' },
        { field: 'etatBooleanBonC', header: 'Avec bon Commande ?' },
        { field: 'etatBooleanBonL', header: 'Avec bon Livraison ?' },
      ];
      this.entretiens = [
        { value: 'materiel', label: 'Matériel' },
        { value: 'jardinage', label: 'Jardinage' },
        { value: 'electricité', label: 'Electricité' },
        { value: 'plomberie', label: 'Plomberie' },
        { value: 'télephone', label: 'Télephone' },
        { value: 'minuiserie', label: 'Minuiserie' },
        { value: 'internet', label: 'Internet' },
        { value: 'autre', label: 'Autre' },
      ];
    }
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
    if (this.prestationExterne.presBonCommandeE == null) {
      this.prestationExterne.presBonCommandeE = new PresBonCommande();
    }
    if (this.prestationExterne.presBonLivraisonE == null ) {
      this.prestationExterne.presBonLivraisonE= new PresBonLivraison();
    }
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
          this.toast.warning('merci de choisir un matériel');
        } else if (data === -1) {
          this.toast.warning('merci de choisir un matériel');
        } else if (data === -2) {
          this.toast.warning('merci de choisir un local');
        } else if (data === -3) {
          this.toast.warning('merci de choisir une réclamation');
        } else if (data === -4) {
          this.toast.warning('merci de completer les champs du bon de commande');
        } else if (data === -5) {
          this.toast.warning('merci de completer les champs du bon de livraison');
        } else if (data === -6) {
          this.toast.warning('vous ne pouvez pas changer le type de la prestation à matériel ');
        } else if (data === -7) {
          this.toast.warning('vous ne pouvez pas changer le type de la prestation');
        } else if (data === -8) {
          this.toast.warning('vous ne pouvez pas retirer le bon commande de cette prestation');
        } else if (data === -9) {
          this.toast.warning('vous ne pouvez pas retirer le bon livraison de cette prestation');
        } else if (data === -10) {
          this.toast.warning('vous ne pouvez pas retirer la réclamation de cette prestation');
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
