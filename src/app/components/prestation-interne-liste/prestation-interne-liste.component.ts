import { Component, OnInit } from '@angular/core';
import {Reclamation} from '../../controller/model/reclamation.model';
import {ReclamationService} from '../../controller/service/reclamation.service';
import {PrestationInterne} from '../../controller/model/prestation-interne.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SelectItem} from 'primeng';
import {PrestationInterneService} from '../../controller/service/prestation-interne.service';
import {LocalService} from '../../controller/service/local.service';
import {LocaldetailService} from '../../controller/service/localdetail.service';
import {AgentService} from '../../controller/service/agent.service';
import {Agent} from '../../controller/model/agent.model';
import {Local} from '../../controller/model/local.model';
import {Localdetail} from '../../controller/model/localdetail.model';
import {ToastrService} from 'ngx-toastr';
import {ConfirmationService, MessageService} from "primeng/api";

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

  userform: FormGroup;
  typeuser = localStorage.getItem('type');
  reclamations: SelectItem[];
  agents: SelectItem[];

  cols: any[];
  entretiens: any[];
  foundedAgents = new Array<Agent>();
  constructor(private fb: FormBuilder,
              private prestationInterneService: PrestationInterneService,
              private localdetailService: LocaldetailService,
              private agentService: AgentService,
              private reclamationService: ReclamationService,
              private toast: ToastrService,
              private localService: LocalService,
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
    if (this.typeuser === 'employé' ) {
      window.location.href = 'http://localhost:4200/accueil';
    }
    this.prestationInterneService.findAll();
    this.localService.findAll();
    this.reclamationService.findAllReclamationsNonTraiter();
    this.findAllAgents();

    this.userform = this.fb.group({
      typeEntretien: new FormControl('', Validators.required),
      Locale: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      agent: new FormControl('', Validators.required),
    });

    this.cols = [
      { field: 'referenceI', header: 'Réference' },
      { field: 'typeEntretienI', header: 'Entretien' },
      { field: 'dateI', header: 'Date' },
      { field: 'nomAgentI', header: 'Agent' },
      { field: 'nomLocaleI', header: 'Local' },
      { field: 'nomMaterielI', header: 'Matériel' },
      { field: 'etatBoolean', header: 'Réclamée ?' }
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
  showDialogToAdd() {
    this.newPrestation = true;
    this.prestationInterne = new PrestationInterne();
    this.displayDialog = true;
    this.cancel = true;
  }
  save() {
    console.log('materiel:' + this.prestationInterne.materielLocale);
    this.updatePrestationI(this.prestationInterne);
  }

  delete() {
    const index = this.prestationInterneService.foundedPrestationInternes.indexOf(this.selectedPrestation);
    // tslint:disable-next-line:max-line-length
    this.prestationInterneService.foundedPrestationInternes = this.prestationInterneService.foundedPrestationInternes.filter((val, i) => i !== index);
    this.prestationInterneService.delete(this.selectedPrestation.referenceI);
    this.prestationInterne = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newPrestation = false;
    this.prestationInterne = this.clonePrestation(event.data);
    this.displayDialog = true;
    this.cancel = false;
  }

  clonePrestation(p: PrestationInterne): PrestationInterne {
    const prestation = new PrestationInterne();
    for (const prop in p) {
      prestation[prop] = p[prop];
    }
    return prestation;
  }
  get foundedPrestationInterne(): PrestationInterne[] {
    return this.prestationInterneService.foundedPrestationInternes;
  }
  get foundedLocales(): Local[] {
    return this.localService.foudedLocales;
  }

  get foundedReclamatoinsSousTraitement(): Reclamation[] {
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
  updatePrestationI(prestationI: PrestationInterne) {
    this.progress = true;
    this.prestationInterneService.update(prestationI).subscribe(
      data => {
        if (data === -1) {
          this.toast.warning('merci de choisir le materiel');
        } else if (data === -2) {
          this.toast.warning('merci de choisir la reclamation');
        } else if (data === -3) {
          this.toast.warning('merci de choisir le materiel');
        } else if (data === -4) {
          this.toast.warning('merci de choisir le materiel');
        } else {
          console.log('success prestationInterne updated');
          this.toast.info('Prestation Interne Modifiée');
          this.prestationInterneService.findAll();
          this.prestationInterne = null;
          this.displayDialog = false;
          this.progress = false;
        }
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\' actualiser la page');
      }
    );
  }
  get progress(): boolean {
    return this.prestationInterneService.progress;
  }
  set progress(value: boolean) {
    this.prestationInterneService.progress = value;
  }
}
