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
              private localService: LocalService) { }


  ngOnInit() {
    this.prestationInterneService.findAll();
    this.localdetailService.findAll();
    this.localService.findAll();
    this.reclamationService.findAll();
    this.findAllAgents();

    this.userform = this.fb.group({
      typeEntretien: new FormControl('', Validators.required),
      Locale: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      agent: new FormControl('', Validators.required),
    });

    this.cols = [
      { field: 'referenceI', header: 'Reference' },
      { field: 'typeEntretienI', header: 'Entretien' },
      { field: 'dateI', header: 'Date' },
      { field: 'nomAgentI', header: 'Agent' },
      { field: 'nomLocaleI', header: 'Locale' },
      { field: 'nomMaterielI', header: 'Materiel' },
      { field: 'reclamedI', header: 'Réclamée ?' },
    ];
    this.entretiens = [
      { value: 'jardinage', label: 'Jardinage' },
      { value: 'materiel', label: 'Entretien materiel' },
    ];

    this.reclamations = [
      { value: '', label: 'Choisir une réclamation' },
      { value: '1', label: 'recla 1' }
    ];

    this.agents = [
      { value: '', label: 'Choisir un agent' },
      { value: '1', label: 'agent 1' }
    ];
  }
  showDialogToAdd() {
    this.newPrestation = true;
    this.prestationInterne = new PrestationInterne();
    this.displayDialog = true;
    this.cancel = true;
  }
  save() {
    const prestationsInternes = this.prestationInterneService.foundedPrestationInternes;
    if (this.newPrestation) {
        prestationsInternes.push(this.prestationInterne);
    } else {
      prestationsInternes[this.prestationInterneService.foundedPrestationInternes.indexOf(this.selectedPrestation)] = this.prestationInterne;
      this.prestationInterneService.update(this.prestationInterne);
    }
    this.prestationInterneService.foundedPrestationInternes = prestationsInternes;
    this.prestationInterne = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.prestationInterneService.foundedPrestationInternes.indexOf(this.selectedPrestation);
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
  get foundedLocalDetails(): Localdetail[] {
    return this.localdetailService.foundedLocalDetails;
  }
  get foundedReclamatoins(): Reclamation[] {
    return this.reclamationService.reclamationsFounded;
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
}
