import {Component, OnInit, PipeTransform} from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Localdetail} from '../../controller/model/localdetail.model';
import {LocaldetailService} from '../../controller/service/localdetail.service';
import {MaterielService} from '../../controller/service/materiel.service';
import {LocalService} from '../../controller/service/local.service';
import {Materiel} from '../../controller/model/materiel.model';
import {Local} from '../../controller/model/local.model';

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


  userform: FormGroup;


  errorS: number;
  errorC: number;
  constructor(private fb: FormBuilder, private messageService: MessageService,
              private materielService: MaterielService,
              private localService: LocalService,
              private localdetailService: LocaldetailService) { }

  ngOnInit(): void {
    this.localdetailService.findAll();

    this.userform = this.fb.group({
      referencelocal: new FormControl('', Validators.required),
      materiellocal: new FormControl('', Validators.required),
      localassocie: new FormControl('', Validators.required),
      dateachat: new FormControl('', Validators.required),
    });
    this.localService.findAll();
    this.materielService.findAll();
    this.cols = [
      {field: 'referenceML', header: 'Réference'},
      {field: 'materielLocale', header: 'Materiel'},
      {field: 'localeAssocie', header: 'Locale, Departement'},
      {field: 'dateAffectation', header: 'Date Achat Materiel'},
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
    const localls = this.localdetailService.foundedLocalDetails;
    if (this.newLocal) {
      localls.push(this.local);
      console.log('ha howa ref dialhom bjoj : ' + this.local.materiel.reference + ', loacale :' + this.local.locale.reference);
      this.localdetailService.save(this.local);
      this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Materiel Affecté'});
    } else {
      localls[this.localdetailService.foundedLocalDetails.indexOf(this.selectedLocal)] = this.local;
      this.localdetailService.update(this.local);
      this.messageService.add({severity: 'info', summary: 'Succés', detail: 'Materiel Modifié'});
    }

    this.localdetailService.foundedLocalDetails = localls;
    this.local = null;
    this.displayDialog = false;
  }



  delete() {
    const index = this.localdetailService.foundedLocalDetails.indexOf(this.selectedLocal);
    this.localdetailService.foundedLocalDetails = this.localdetailService.foundedLocalDetails.filter((val, i) => i !== index);
    this.localdetailService.delete(this.selectedLocal.referenceML);
    this.messageService.add({severity: 'warn', summary: 'Succés', detail: 'Materiel Supprimé'});
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
  get foundedLocalDetails(): Localdetail[] {
    return this.localdetailService.foundedLocalDetails;
  }
  get foundedMaterielToChoose(): Materiel[] {
    return this.materielService.foundedMateriels;
  }
  get foundedLocalToChoose(): Local[] {
    return this.localService.foudedLocales;
  }
}
