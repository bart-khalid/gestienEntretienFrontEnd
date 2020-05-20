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
              private agentService: AgentService,
              private localdetailService: LocaldetailService,
              private messageService: MessageService ) { }

  ngOnInit(): void {
    this.reclamationService.findAll();
    this.localService.findAll();
    this.agentService.findAll();
    this.localdetailService.findAll();

    this.findAllAgents();


    this.userform = this.fb.group({
      typeEntretien: new FormControl('', Validators.required),
      Locale: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      agent: new FormControl('', Validators.required),
      });


    this.userform1 = this.fb.group({
      typeEntretienn: new FormControl('', Validators.required),
      datee: new FormControl('', Validators.required),
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
      this.prestationInterneService.save(this.prestataionInterne);
    } else if (this.newPresExterne) {
     // to be implement
    }
    this.displayDialog = false;
    this.displayDialogE = false;
    this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Opération Réussie'});
  }
  get foundedReclamations(): Reclamation[] {
    return this.reclamationService.reclamationsFounded;
  }
  get foundedLocales(): Local[] {
    return this.localService.foudedLocales;
  }

  get foundedMateriels(): Localdetail[] {
    return this.localdetailService.foundedLocalDetails;
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
