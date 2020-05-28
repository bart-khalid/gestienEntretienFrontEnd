import { Injectable } from '@angular/core';
import {Login} from '../model/login.model';
import {HttpClient} from '@angular/common/http';
import {Users} from '../model/users.model';
import {UsersService} from './users.service';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _user: Users;
  private _errorS: number  ;
  private _errorC: number = null ;
  private url = 'http://localhost:8090/GestionEntretien/Login/';
  private _currentuser: Users = null;


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
      sessionStorage.setItem('nom', this.currentuser.nom);
      sessionStorage.setItem('type', this.currentuser.type);
      sessionStorage.setItem('username', this.currentuser.username);
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
    console.log(!(user === null));
    return !(user === null && user1 === null && user2 === null && user3 === null );
  }

  logOut() {
    sessionStorage.removeItem('prenom');
    sessionStorage.removeItem('nom');
    sessionStorage.removeItem('type');
    sessionStorage.removeItem('username');
    window.location.href = 'http://localhost:4200/';
  }


  constructor(private http: HttpClient , private usersService: UsersService , private route: Router) {}

 public errorMsg() {
  /*  if (this.errorS === -1) { return 'Cet Utilisateur existe déja'; }
    else if (this.errorS === -2) { return 'Nom Utilisateur est obligatoire'; }
    else if (this.errorS === -3) { return 'Mot de passe est obligatoire'; }
    else if (this.errorS === -3) { return 'Type est obligatoire'; } */
    if (this._errorC === -1 || this._errorC === -2) { return 'Vérifier votre Nom d\'utilisateur ou Mot de passe'; }
 }


 public connect( usernamee: string , passwordd: string) {
    this.http.get<number>(this.url + 'Connect/username/' + usernamee + '/password/' + passwordd).subscribe(
      data => {
        this._errorC = data;
        console.log(this._errorC);
        if (this._errorC === 1) {
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

