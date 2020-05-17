import { Component, OnInit } from '@angular/core';
import {ReclamationService} from '../../controller/service/reclamation.service';
import {Reclamation} from '../../controller/model/reclamation.model';
import {PrestationInterne} from '../../controller/model/prestation-interne.model';
import {MessageService, SelectItem} from 'primeng';
import {PrestationExterne} from '../../controller/model/prestation-externee.model';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.css']
})
export class PrestationComponent implements OnInit {

  cols: any[];
  entretiens: any[];
  reclamations: SelectItem[];
  agents: SelectItem[];
  userform: FormGroup;
  userform1: FormGroup;

  public displayDialog: boolean;
  public displayDialogE: boolean;
  public newPresInterne: boolean;
  public newPresExterne: boolean;



  public prestataionInterne = new PrestationInterne();
  public prestataionExterne = new PrestationExterne();

  constructor(private fb: FormBuilder, private reclamationService: ReclamationService, private messageService: MessageService ) { }

  ngOnInit(): void {
    this.reclamationService.findAll();

    this.userform = this.fb.group({
      typeEntretien: new FormControl('', Validators.required),
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
      { value: '', label: 'Choisir un type' },
      { value: 'jardinage', label: 'Jardinage' }
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
    this.newPresInterne = true;
    this.prestataionInterne = new PrestationInterne();
    this.displayDialog = true;
  }
  showDialogToAddE() {
    this.newPresExterne = true;
    this.prestataionExterne = new PrestationExterne();
    this.displayDialogE = true;
  }
  save() {
    if (this.newPresInterne) {
      this.prestataionInterne = null;
    } else if (this.newPresExterne) {
      this.prestataionExterne = null;
    }
    this.displayDialog = false;
    this.displayDialogE = false;
    this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Opération Réussie'});
  }
  get foundedReclamations(): Reclamation[] {
    return this.reclamationService.reclamationsFounded;
  }

}
