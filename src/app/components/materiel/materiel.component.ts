import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService, SelectItem} from 'primeng/api';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  userform: FormGroup;

  submitted: boolean;

  genders: SelectItem[];

  description: string;

  constructor(private fb: FormBuilder, private messageService: MessageService) {}

  ngOnInit() {
    this.userform = this.fb.group({
      fournisseur: new FormControl('', Validators.required),
      nombreEntite: new FormControl('', Validators.required),
      nom: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    });

    this.genders = [];
    this.genders.push({label: 'Select Type', value: ''});
    this.genders.push({label: 'Informatique', value: 'informatique'});
    this.genders.push({label: 'Enseignement', value: 'enseignement'});
  }

  save(value: string) {
    this.submitted = true;
    this.messageService.add({severity: 'info', summary: 'Succés', detail: 'Opération Enregistrée'});
  }

  get diagnostic() { return JSON.stringify(this.userform.value); }

}
