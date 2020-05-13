import {Component, OnInit, PipeTransform} from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Localdetail} from '../../controller/model/localdetail.model';
import {DatePipe, formatDate} from '@angular/common';

@Component({
  selector: 'app-localdetail',
  templateUrl: './localdetail.component.html',
  styleUrls: ['./localdetail.component.css']
})
export class LocaldetailComponent implements OnInit {

  value: boolean;
  cancel: boolean;
  displayDialog: boolean;
  submitted: boolean;
  local = new Localdetail();

  selectedLocal: Localdetail;

  newLocal: boolean;

  locals = new Array<Localdetail>();

  cols: any[];

  typeslocal: SelectItem[];

  typesmateriel: SelectItem[];

  userform: FormGroup;


  errorS: number;
  errorC: number;
  constructor(private fb: FormBuilder, private messageService: MessageService, public datepipe: DatePipe) { }

  ngOnInit(): void {

    this.userform = this.fb.group({
      materiellocal: new FormControl('', Validators.required),
      localassocie: new FormControl('', Validators.required),
      dateachat: new FormControl('', Validators.required),
    });

    this.cols = [
      {field: 'referenceMT', header: 'Réference'},
      {field: 'materiellocal', header: 'Materiel'},
      {field: 'localassocie', header: 'Locale'},
      {field: 'dateachat', header: 'Date Achat Materiel'},
    ];

    this.typeslocal = [
      {label: 'Selectionnez un locale', value: ''},
      {label: 'Amphi 1,Département autre', value: 'Amphi 1 Département autre'},
      {label: 'Salle 1,Département informatique', value: 'Salle 1 Département informatique'},
      {label: 'Laboratoire 2,Département biologie', value: 'Laboratoire 2 Département biologie'},
      {label: 'Amphi 3,Département autre', value: 'Amphi 3 Département autre'},
    ];

    this.typesmateriel = [
      {label: 'Selectionnez un materiel', value: ''},
      {label: 'Projecteur ', value: 'Projecteur'},
      {label: 'Pc bureau', value: 'Pc bureau'},
    ];
  }

  onSubmit() {
    this.submitted = true;
    this.messageService.add({severity: 'info', summary: 'Succés', detail: 'Opération Enregistrée'});
  }

  showDialogToAdd() {
    this.newLocal = true;
    this.local = new Localdetail();
    this.displayDialog = true;
    this.cancel = true;
  }

  save() {
    const localls = this.locals;
    if (this.newLocal) {
      localls.push(this.local);
    } else {
      localls[this.locals.indexOf(this.selectedLocal)] = this.local;
    }

    this.locals = localls;
    this.local = null;
    this.displayDialog = false;
  }



  delete() {
    const index = this.locals.indexOf(this.selectedLocal);
    this.locals = this.locals.filter((val, i) => i !== index);
    this.local = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newLocal = false;
    this.local = this.cloneLocal(event.data);
    this.displayDialog = true;
    this.cancel = false;
  }

  cloneLocal(c: Localdetail): Localdetail {
    const local = new Localdetail();
    for (const prop in c) {
      local[prop] = c[prop];
    }
    return local;
  }
}
