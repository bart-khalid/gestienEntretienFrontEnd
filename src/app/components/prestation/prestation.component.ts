import { Component, OnInit } from '@angular/core';
import {ReclamationService} from '../../controller/service/reclamation.service';
import {Reclamation} from '../../controller/model/reclamation.model';
import {PrestationInterne} from '../../controller/model/prestation-interne.model';
import {MessageService, SelectItem} from 'primeng';
import {PrestationExterne} from '../../controller/model/prestation-externee.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LocaldetailService} from '../../controller/service/localdetail.service';
import {LocalService} from '../../controller/service/local.service';
import {Local} from '../../controller/model/local.model';
import {Localdetail} from '../../controller/model/localdetail.model';
import {AgentService} from '../../controller/service/agent.service';
import {Agent} from '../../controller/model/agent.model';
import {PrestationInterneService} from '../../controller/service/prestation-interne.service';
import {PrestationExterneService} from '../../controller/service/prestation-externe.service';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.css']
})
export class PrestationComponent implements OnInit {

  cols: any[];
  entretiens: any[];

  userform: FormGroup;
  userform1: FormGroup;

  public displayDialog: boolean;
  public displayDialogE: boolean;
  public newPresInterne: boolean;
  public newPresExterne: boolean;


  selectedEntretien: string;
  selectedLocalee = new Local();


  public prestataionInterne = new PrestationInterne();
  public prestataionExterne = new PrestationExterne();
  public foundedAgents = new Array<Agent>();

  constructor(private fb: FormBuilder, private reclamationService: ReclamationService,
              private prestationInterneService: PrestationInterneService,
              private localService: LocalService,
              private toast: ToastrService,
              private prestationExterneService: PrestationExterneService,
              private agentService: AgentService) { }

  ngOnInit(): void {
    this.reclamationService.findAll();
    this.localService.findAll();
    this.agentService.findAll();
    this.reclamationService.findAllReclamationsNonTraiter();
    this.findAllAgents();


    this.userform = this.fb.group({
      typeEntretien: new FormControl('', Validators.required),
      Locale: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      agentt: new FormControl('', Validators.required),
      });


    this.userform1 = this.fb.group({
      typeEntretienn: new FormControl('', Validators.required),
      datee: new FormControl('', Validators.required),
      LocaleE: new FormControl('', Validators.required),
      nomprestataire: new FormControl('', Validators.required),
      montant: new FormControl('', Validators.required),
      });

    this.cols = [
      { field: 'reference', header: 'Reference' },
      { field: 'reclamentName', header: 'Reclament' },
      { field: 'objet', header: 'Objet' },
      { field: 'etat', header: 'Etat' }
    ];
    this.entretiens = [
      { value: 'jardinage', label: 'Jardinage' },
      { value: 'materiel', label: 'Entretien Materiel' }
    ];

  }

  showDialogToAdd() {
    this.newPresExterne = false;
    this.newPresInterne = true;
    this.prestataionInterne = new PrestationInterne();
    this.displayDialog = true;
  }
  showDialogToAddE() {
    this.newPresInterne = false;
    this.newPresExterne = true;
    this.prestataionExterne = new PrestationExterne();
    this.displayDialogE = true;
  }
  save() {
    if (this.newPresInterne) {
      this.prestataionInterne.typeEntretienI = this.selectedEntretien;
      this.prestataionInterne.locale = this.selectedLocalee;
      this.savePresInterne(this.prestataionInterne);
    } else if (this.newPresExterne) {
     // to be implement
      this.prestataionExterne.locale = this.selectedLocalee;
      this.savePresExterne(this.prestataionExterne);
    }
  }
  get foundedReclamations(): Reclamation[] {
    return this.reclamationService.reclamationsFounded;
  }
  get foundedLocales(): Local[] {
    return this.localService.foudedLocales;
  }
  get foundedReclamationsToChoose(): Reclamation[] {
    return this.reclamationService.foundedReclamationsNonTraiter;
  }

  findAllAgents() {
    this.agentService.findAll().subscribe(
      data => {
        this.foundedAgents = data.reverse();
        console.log('data Agents : ' + data.length);
      },
      error => {
        console.log('error find');
      });
  }

  public savePresInterne(prestationI: PrestationInterne) {
    this.prestationInterneService.save(prestationI).subscribe(
      data => {
        if (data === -2) {
          this.toast.warning('erreur vérifiez que tous les champs sont remplis');
        } else if (data === -3) {
          this.toast.warning('merci de choisir le materiel');
        } else {
          this.displayDialog = false;
          this.prestataionInterne = null;
          console.log('success prestationInterne saved');
          this.toast.success('Prestation Interne Enregitrée');
          this.reclamationService.findAll();
          this.reclamationService.findAllReclamationsNonTraiter();
        }
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\'actualiser la page');
      }
    );
  }
  public savePresExterne(prestationE: PrestationExterne) {
    this.prestationExterneService.save(prestationE).subscribe(
      data => {
        if (data === -1) {
          this.toast.warning('merci de choisir un locale');
        } else if (data === -2) {
          this.toast.warning('merci de choisir le materiel');
        } else if (data === -3) {
          this.toast.warning('merci de choisir la reclamation');
        } else if (data === -4) {
          this.toast.warning('merci de remplir les champ du bon de commande');
        } else if (data === -5) {
          this.toast.warning('merci de remplir les champ du bon de livraison');
        } else {
          this.displayDialogE = false;
          console.log('prestationExterne saved');
          this.toast.success('Prestation Externe Enregistrée');
          this.prestataionExterne = null;
        }
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\'actualiser la page');
      }
    );
  }
}
