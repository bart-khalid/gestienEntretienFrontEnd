import { Component, OnInit } from '@angular/core';
import {Users} from '../../controller/model/users.model';
import {ConfirmationService, Message, MessageService, SelectItem} from 'primeng/api';
import {UsersService} from '../../controller/service/users.service';
import {Agent} from '../../controller/model/agent.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AgentService} from '../../controller/service/agent.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  value: boolean;
  cancel: boolean;
  displayDialog: boolean;
  agent = new Agent();

  selectedAgent: Agent;

  newAgent: boolean;

  agents = new Array<Agent>();

  cols: any[];

  type: SelectItem[];

  userform: FormGroup;

  errors: number;


  constructor(private fb: FormBuilder, private messageService: MessageService , private agentService: AgentService,
              private confirmationService: ConfirmationService ) {
  }
  confirm() {
    this.confirmationService.confirm({
      message: 'Voulez-vous vraiment effectuer cette action?',
      accept: () => {
        this.delete();
      }
    });
  }
  ngOnInit(): void {
    this.userform = this.fb.group({
      codeAgent: new FormControl('', Validators.required),
      nomAgent: new FormControl('', Validators.required),
      dateEntree: new FormControl('', Validators.required),
      adresseDomicile: new FormControl('', Validators.required),
      entrepriseLiee: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.compose([Validators.required,
        Validators.pattern(/(\+212|0|212)([ \-_/]*)(\d[ \-_/]*){9}/)])),
    });

    this.cols = [
      {field: 'reference', header: 'Réference'} ,
      {field: 'codeAgent', header: 'Code Agent'} ,
      {field: 'nomAgent', header: 'Nom Agent'},
      {field: 'dateEntree', header: 'Date Entrée'},
      {field: 'entrepriseliee', header: 'Entreprise Liée'},
      {field: 'adresseDomicile', header: 'Adresse domicile'},
      {field: 'tel', header: 'Télephone'}
    ];
    this.find();
  }

  public find() {
    this.agentService.findAll().subscribe(
      data => {
        this.agents = data.reverse();
      },
      error => {
        console.log('error find');
      });
  }
  showDialogToAdd() {
    this.agent = new Agent();
    this.newAgent = true;
    this.agent = new Agent();
    this.displayDialog = true;
    this.cancel = true;
  }

  save() {
    const age = this.agents;
    if (this.newAgent) {
      this.agentService.save(this.agent).subscribe(
        data => {
          console.log(data);
          this.errors = data;
          if (this.errors === 1) {
            this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Opération Enregistrée'});
            this.find();
            this.agent = null;
            this.displayDialog = false;
          } else if (this.errors === -1){
            this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Code agent déja existe'});
          }
          else if (this.errors === -2){
            this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Numéro de Télephone déja existe'});
          }
        }, error => {
          console.log('error');
        }
      );
    } else {
      //  use[this.users.indexOf(this.selectedUser)] = this.user;
      this.agentService.update(this.agent).subscribe(
        data => {
          this.errors = data;
          console.log(data);
          if(this.errors === 1) {
            this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Opération Enregistrée'});
            this.find();
            this.agent = null;
            this.displayDialog = false;
          } else if(this.errors === -1) {
            this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Numéro de Télephone déja existe'});
          }
        }, error => {
          console.log('error update');
        }
      );
    }
  }


  delete() {
    const index = this.agents.indexOf(this.selectedAgent);
    this.agents = this.agents.filter((val, i) => i !== index);
    this.agentService.delete(this.selectedAgent.reference).subscribe(
      data => {
        this.messageService.add({severity: 'warn', summary: 'Succés', detail: 'Agent Supprimé'});
      },
      error => {
        console.log('error delete');
      }
    );
    this.agent = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newAgent = false;
    this.agent = this.cloneAgent(event.data);
    this.displayDialog = true;
    this.cancel = false;
  }

  cloneAgent(a: Agent): Agent {
    const agent = new Agent();
    for (const prop in a) {
      agent[prop] = a[prop];
    }
    return agent;
  }

}
