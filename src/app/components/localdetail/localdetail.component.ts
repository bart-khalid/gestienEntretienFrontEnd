import {Component, OnInit, PipeTransform} from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';
import {FormBuilder} from '@angular/forms';
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

  errorS: number;
  errorC: number;
  constructor(private fb: FormBuilder, private messageService: MessageService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.onSubmit();
    this.cols = [
      {field: 'materiellocal', header: 'Materiel'},
      {field: 'localassocie', header: 'Locale'},
      {field: 'dateachat', header: 'Date Achat Materiel'},
    ];

    this.typeslocal = [
      {label: 'Selectionnez un locale', value: null},
      {label: 'Amphi 1,Département autre', value: 'Amphi 1 Département autre'},
      {label: 'Salle 1,Département informatique', value: 'Salle 1 Département informatique'},
      {label: 'Laboratoire 2,Département biologie', value: 'Laboratoire 2 Département biologie'},
      {label: 'Amphi 3,Département autre', value: 'Amphi 3 Département autre'},
    ];

    this.typesmateriel = [
      {label: 'Selectionnez un materiel', value: null},
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
      console.log(this.local.dateachat);
      const dd = this.datepipe.transform(this.local.dateachat, 'dd-MM-yyyy');
      console.log(dd);
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
