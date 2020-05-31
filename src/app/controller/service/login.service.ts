import { Injectable } from '@angular/core';
import {Login} from '../model/login.model';
import {HttpClient} from '@angular/common/http';
import {Users} from '../model/users.model';
import {UsersService} from './users.service';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {MessageService} from "primeng";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _user: Users;
  private _errorS: number  ;
  private _errorC: number = null ;
  private url = 'http://localhost:8090/GestionEntretien/Login/';
  private _currentuser: Users = null;

  constructor(private http: HttpClient , private usersService: UsersService , private route: Router,
              private messageService: MessageService) {}

  set currentuser(value: Users) {
    this._currentuser = value;
  }

  get errorC(): number {
    console.log('get c ' + this._errorC);
    return this._errorC;
  }

  get user(): Users {
    if (this._user == null) {
      this._user = new Users();
    }
    return this._user;
  }

  set user(value: Users) {
    this._user = value;
  }

  get currentuser(): Users {
    if (this._currentuser == null) {
      this._currentuser = new Users();
    }
    return this._currentuser;
  }

  authenticate() {
    console.log(this._errorC);
    if (this._errorC === 1) {
      console.log(this.currentuser.username);
      sessionStorage.setItem('prenom', this.currentuser.prenom);
      sessionStorage.setItem('reference', this.currentuser.reference);
      sessionStorage.setItem('nom', this.currentuser.nom);
      sessionStorage.setItem('type', this.currentuser.type);
      sessionStorage.setItem('username', this.currentuser.username);
      sessionStorage.setItem('password', this.currentuser.password);
      sessionStorage.setItem('telephone', String(this.currentuser.telephone));
      return true;
    } else {
      return false;
    }
  }


  isUserLoggedIn() {
    const user = sessionStorage.getItem('prenom');
    const user1 = sessionStorage.getItem('nom');
    const user2 = sessionStorage.getItem('type');
    const user3 = sessionStorage.getItem('username');
    const user4 = sessionStorage.getItem('password');
    const user5 = sessionStorage.getItem('telephone');

    console.log(!(user === null));
    return !(user === null && user1 === null && user2 === null && user3 === null && user4 === null && user5 === null  );
  }

  logOut() {
    sessionStorage.removeItem('prenom');
    sessionStorage.removeItem('nom');
    sessionStorage.removeItem('type');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('telephone');
    window.location.href = 'http://localhost:4200/';
  }






 public connect( usernamee: string , passwordd: string) {
   if (usernamee === null || usernamee === '' || usernamee === undefined) {
     this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Veuillez fournir un nom d\'utilisateur '});
   } else if (passwordd === null || passwordd === '' || passwordd === undefined) {
     this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Veuillez fournir un mot de passe '});
   } else {


     this.http.get<number>(this.url + 'Connect/username/' + usernamee + '/password/' + passwordd).subscribe(
       data => {
         this._errorC = data;
         console.log(data);
         if (this._errorC === -1 || this._errorC === -2) {
           // tslint:disable-next-line:max-line-length
           this.messageService.add({severity: 'error', summary: 'Erreur', detail: '  Vérifier votre Nom d\'utilisateur ou Mot de passe'});
         } else if (this._errorC === 1) {
           this.usersService.findbyUsername(usernamee).subscribe(
             dataa => {
               this.currentuser = dataa;
               this.authenticate();
               if (this.authenticate()) {
                 window.location.href = 'http://localhost:4200/accueil';
               }
               console.log(this.currentuser);
             }
           );
           //    this.route.navigate(['accueil']);
           //    window.location.href = 'http://localhost:4200/accueil';
         }
       },
       error =>
         console.log(error)
     );
   }
 }

}

