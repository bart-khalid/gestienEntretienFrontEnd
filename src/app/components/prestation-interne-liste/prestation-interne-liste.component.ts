import { Component, OnInit } from '@angular/core';
import {Reclamation} from '../../controller/model/reclamation.model';
import {ReclamationService} from '../../controller/service/reclamation.service';
import {PrestationInterne} from '../../controller/model/prestation-interne.model';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SelectItem} from "primeng";

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
  constructor(private fb: FormBuilder, private reclamationService: ReclamationService) { }


  ngOnInit() {
    this.userform = this.fb.group({
      typeEntretien: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      agent: new FormControl('', Validators.required),
    });

    this.cols = [
      { field: 'reference', header: 'Reference' },
      { field: 'typeEntretien', header: 'Entretien' },
      { field: 'date', header: 'Date' },
      { field: 'reclamed', header: 'Réclamée ?' },
      { field: 'codeAgent', header: 'Agent' },
    ];
    this.entretiens = [
      { value: '', label: 'Choisir un type' },
      { value: 'jardinage', label: 'Jardinage' },
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
    const prestationsInternes = this.prestationsInternes;
    if (this.newPrestation) {
        prestationsInternes.push(this.prestationInterne);
    } else {
      prestationsInternes[this.prestationsInternes.indexOf(this.selectedPrestation)] = this.prestationInterne;
    }
    this.prestationsInternes = prestationsInternes;
    this.prestationInterne = null;
    this.displayDialog = false;

  }

  delete() {
    const index = this.prestationsInternes.indexOf(this.selectedPrestation);
    this.prestationsInternes = this.prestationsInternes.filter((val, i) => i !== index);
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
}
