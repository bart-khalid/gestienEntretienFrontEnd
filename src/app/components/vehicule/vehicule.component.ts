import { Component, OnInit } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {
  userform: FormGroup;

  submitted: boolean;

  genders: SelectItem[];

  description: string;

  constructor(private fb: FormBuilder, private messageService: MessageService) {}

  ngOnInit() {
  this.userform = this.fb.group({
      matricule: new FormControl('', Validators.required),
      marque: new FormControl('', Validators.required),
    dateachat: new FormControl('', Validators.required),
      utilite: new FormControl('',Validators.required),
      gender: new FormControl('', Validators.required)
    });

    this.genders = [];
    this.genders.push({label: 'Select Type', value: ''});
    this.genders.push({label: 'Automobile', value: 'automobile'});
    this.genders.push({label: 'Bus', value: 'bus'});
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({severity: 'info', summary: 'Succés', detail: 'Opération Enregistrée'});
  }

  get diagnostic() { return JSON.stringify(this.userform.value); }

}
