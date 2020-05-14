import { Component, OnInit } from '@angular/core';
import {Message, MessageService, SelectItem} from 'primeng/api';
import {Users} from '../../controller/model/users.model';
import {UsersService} from '../../controller/service/users.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  value: boolean;
  cancel: boolean;
  displayDialog: boolean;
  submitted: boolean;
  user = new Users();

  selectedUser: Users;

  newUser: boolean;

  users = new Array<Users>();

  cols: any[];

  type: SelectItem[];

   errorS: number ;
   errorC: number ;

  userform: FormGroup;

  msgs: Message[] = [];

  constructor(private fb: FormBuilder,private messageService: MessageService,private userService: UsersService) {
  }

  ngOnInit(): void {
    this.userform = this.fb.group({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.compose([Validators.required,
        Validators.pattern(/(\+212|0|212)([ \-_/]*)(\d[ \-_/]*){9}/)])),
      usernamee: new FormControl('', Validators.required),
      passwordd: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    });

    this.cols = [
      {field: 'nomu', header: 'Nom '} ,
      {field: 'prenomu', header: 'Prénom'},
      {field: 'telephoneu', header: 'Numero de Telephone'},
      {field: 'username', header: 'Nom D\'utilisateur'},
      {field: 'password', header: 'Mot de passe'},
      {field: 'typeu', header: 'Type utilisateur'}
    ];
    this.type = [];
    this.type.push({label: 'Selectionnez le Type', value: ''});
    this.type.push({label: 'Administrateur', value: 'administrateur'});
    this.type.push({label: 'Employé', value: 'employe'});

    this.userService.findAll().subscribe(
      data => {
        this.users = data;
      },
          error => {
        console.log('error find');
      });
  }

  showSuccess(){
    this.msgs = [];
    this.msgs.push({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
  }
  onSubmit(){
    this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Opération Enregistrée'});
  }

  showDialogToAdd() {
    this.newUser = true;
    this.user = new Users();
    this.displayDialog = true;
    this.cancel = true;
  }

  save() {
    const use = this.users;
    if (this.newUser) {
      this.userService.save(this.user).subscribe(
        data => {
          console.log(data);
          this.errorS = data;
        }, error => {
          console.log('error');
        }
      );
    } else {
      use[this.users.indexOf(this.selectedUser)] = this.user;
    }
    this.users = use;

    if (this.errorS === 1) {
    this.user = null;
    this.displayDialog = false;
    } else {

    }
  }


  delete() {
    const index = this.users.indexOf(this.selectedUser);
    this.users = this.users.filter((val, i) => i !== index);
    this.user = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newUser = false;
    this.user = this.cloneUser(event.data);
    this.displayDialog = true;
    this.cancel = false;
  }

  cloneUser(c: Users): Users {
    const use = new Users();
    for (const prop in c) {
      use[prop] = c[prop];
    }
    return use;
  }
}
