import { Component, OnInit } from '@angular/core';
import {Users} from '../../controller/model/users.model';
import {Message, MessageService, SelectItem} from 'primeng/api';
import {UsersService} from '../../controller/service/users.service';
import {Agent} from '../../controller/model/agent.model';

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

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.cols = [
      {field: 'codeAgent', header: 'Code Agent'} ,
      {field: 'nomAgent', header: 'Nom Agent'},
      {field: 'dateEntree', header: 'Date Enree'},
      {field: 'entrepriseLiee', header: 'Entreprise Liee'},
      {field: 'tel', header: 'Telephone'}
    ];
  }
  showDialogToAdd() {
    this.agent = new Agent();
    this.newAgent = true;
    this.agent = new Agent();
    this.displayDialog = true;
    this.cancel = true;
  }

  save() {
    const agents = this.agents;
    if (this.newAgent) {
      agents.push(this.agent);
      this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Opération Réussie'});
    } else {
      agents[this.agents.indexOf(this.selectedAgent)] = this.agent;
      this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Opération Réussie'});
    }
    this.agents = agents;
    this.agent = null;
    this.displayDialog = false;
  }


  delete() {
    const index = this.agents.indexOf(this.selectedAgent);
    this.agents = this.agents.filter((val, i) => i !== index);
    this.agent = null;
    this.displayDialog = false;
    this.messageService.add({severity: 'warn', summary: 'Deleted', detail: 'Opération Réussie'});
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
