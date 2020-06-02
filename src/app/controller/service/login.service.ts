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
  private _progressLogen: boolean;

  constructor(private http: HttpClient , private usersService: UsersService , private route: Router,
              private messageService: MessageService) {}


  get progressLogen(): boolean {
    return this._progressLogen;
  }

  set progressLogen(value: boolean) {
    this._progressLogen = value;
  }

  set currentuser(value: Users) {
    this._currentuser = value;
  }

  get errorC(): number {
    return this._errorC;
  }

  set errorC(value: number) {
    this._errorC = value;
  }

  set errorS(value: number) {
    this._errorS = value;
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
    console.log(this.errorC);
    if (this.errorC === 1) {
      console.log(this.currentuser.username);
      localStorage.setItem('prenom', this.currentuser.prenom);
      localStorage.setItem('reference', this.currentuser.reference);
      localStorage.setItem('nom', this.currentuser.nom);
      localStorage.setItem('type', this.currentuser.type);
      localStorage.setItem('username', this.currentuser.username);
      localStorage.setItem('password', this.currentuser.password);
      localStorage.setItem('telephone', this.currentuser.telephone);
      return true;
    } else {
      return false;
    }
  }


  isUserLoggedIn() {
    const user = localStorage.getItem('prenom');
    const user1 = localStorage.getItem('nom');
    const user2 = localStorage.getItem('type');
    const user3 = localStorage.getItem('username');
    const user4 = localStorage.getItem('password');
    const user5 = localStorage.getItem('telephone');

    console.log(!(user === null));
    return !(user === null && user1 === null && user2 === null && user3 === null && user4 === null && user5 === null  );
  }

  logOut() {
    localStorage.removeItem('prenom');
    localStorage.removeItem('nom');
    localStorage.removeItem('type');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('telephone');
    localStorage.removeItem('reference');
    window.location.href = 'http://localhost:4200/';
  }






 public connect( usernamee: string , passwordd: string) {
    if (usernamee === null || usernamee === '' || usernamee === undefined) {
     this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Veuillez fournir un nom d\'utilisateur '});
    } else if (passwordd === null || passwordd === '' || passwordd === undefined) {
     this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Veuillez fournir un mot de passe '});
    } else {
      this.progressLogen = true;
      this.http.get<number>(this.url + 'Connect/username/' + usernamee + '/password/' + passwordd).subscribe(
       data => {
         this.errorC = data;
         if (this.errorC === -1) {
           this.messageService.add({severity: 'error', summary: 'Erreur', detail: '  Vérifier votre Nom d\'utilisateur ou Mot de passe'});
           this.progressLogen = false;
         } else if (this.errorC === -2) {
           // tslint:disable-next-line:max-line-length
           this.messageService.add({severity: 'error', summary: 'Erreur', detail: '  Vérifier votre Mot de passe'});
           this.progressLogen = false;
         } else {
           this.usersService.findbyUsername(usernamee).subscribe(
             dataa => {
               this.messageService.add({severity: 'success', summary: 'Succés', detail: '  Vous êtes connecté '});
               this.currentuser = dataa;
               this.authenticate();
               if (this.authenticate()) {
                 window.location.href = 'http://localhost:4200/accueil';
               }
               console.log(this.currentuser);
               this.progressLogen = false;
             }
           );
           //    this.route.navigate(['accueil']);
           //    window.location.href = 'http://localhost:4200/accueil';
         }
       },
       error => {
         console.log('error');
       }
     );
   }
 }

}

