import { Injectable } from '@angular/core';
import {Login} from '../model/login.model';
import {HttpClient} from '@angular/common/http';
import {Users} from "../model/users.model";
import {UsersService} from "./users.service";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _user: Users;
  private errorS: number ;
  private errorC: number ;
  private url = 'http://localhost:8090/GestionEntretien/Login/';
  private _currentuser: Users;


  get user(): Users {
    if(this._user == null) {
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


  set currentuser(value: Users) {
    this._currentuser = value;
  }

  constructor(private http: HttpClient , private usersService: UsersService , private route: Router) {}

 public errorMsg() {
    if (this.errorS === -1) { return 'Cet Utilisateur existe déja'; }
    else if (this.errorS === -2) { return 'Nom Utilisateur est obligatoire'; }
    else if (this.errorS === -3) { return 'Mot de passe est obligatoire'; }
    else if (this.errorS === -3) { return 'Type est obligatoire'; }
    if (this.errorC === -1 || this.errorC === -2) { return 'Vérifier votre Nom d\'utilisateur ou Mot de passe'; }
 }


 public connect( usernamee: string , passwordd: string) {
    this.http.get<number>(this.url + 'Connect/username/' + usernamee + '/password/' + passwordd).subscribe(
      data => {
        this.errorC = data;
      if (this.errorC === 1) {
        this.usersService.findbyUsername(usernamee).subscribe(
          dataa => {
            this.currentuser = dataa;
            console.log(this.currentuser);
          },
          error => {
            console.log('error user');
          }
        );
        this.route.navigate(['/actions']);
//        window.location.href = 'http://localhost:4200/actions';
      }
      },
      error =>
        console.log(error)
    );
 }


}

