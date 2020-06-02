import { Component, OnInit } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {UsersService} from '../../controller/service/users.service';
import {Users} from '../../controller/model/users.model';
import {LoginService} from "../../controller/service/login.service";

@Component({
  selector: 'app-vehicule',
  templateUrl: './userinformations.component.html',
  styleUrls: ['./userinformations.component.css']
})
export class UserinformationsComponent implements OnInit {
  userform: FormGroup;
  labelopen = true;
  ref = localStorage.getItem('reference');
  type = localStorage.getItem('type');
  nomm = localStorage.getItem('nom');
  pren = localStorage.getItem('prenom');
  tele = localStorage.getItem('telephone');
  teleinput: string;
  nomuser = localStorage.getItem('username');
  nomuserinput: string;
  passinput: string ;
  errorupdate: number;
  userupdate = new Users();
  typeuser = localStorage.getItem('type');

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private loginService: LoginService ,private messageService: MessageService , private usersService: UsersService) {}

  ngOnInit() {
    if (this.typeuser === 'administrateur' ) {
      window.location.href = 'http://localhost:4200/accueil';
    }
    this.userform = this.fb.group({
      username: new FormControl('', Validators.required),
      numtele: new FormControl('',  Validators.compose([Validators.required,
                 Validators.pattern(/(\+212|0|212)([ \-_/]*)(\d[ \-_/]*){9}/)])),
      pass: new FormControl('', Validators.required),
    });
  }

 update() {
  this.userupdate.reference = this.ref;
  this.userupdate.type = this.type;
  this.userupdate.nom = this.nomm;
  this.userupdate.prenom = this.pren;
  this.userupdate.telephone = this.teleinput;
  this.userupdate.username = this.nomuserinput;
  this.userupdate.password = this.passinput;
  this.usersService.update(this.userupdate).subscribe(
    data => {
      this.errorupdate = data;
      console.log(data);
      if (this.errorupdate === 1) {
        this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Opération Enregistrée'});
        this.labelopen = true;
        this.loginService.logOut();
      } else if (this.errorupdate === -1) {
        this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Nom d\'utilisateur déja existe'});
      } else if (this.errorupdate === -2) {
        this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Numéro de télephone déja existe'});
      }
    }, error => {
      console.log('error update');
    }
  );

 }

 modify() {
    this.labelopen = false ;
    this.teleinput = this.tele;
    this.nomuserinput = this.nomuser;
    this.passinput = null;
 }

 annuler() {
   this.labelopen = true ;
 }
}
