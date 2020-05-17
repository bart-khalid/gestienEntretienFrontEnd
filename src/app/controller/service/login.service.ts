import { Injectable } from '@angular/core';
import {Login} from '../model/login.model';
import {HttpClient} from '@angular/common/http';
import {Users} from "../model/users.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _user: Users;
  private errorS: number ;
  private errorC: number ;
  private url = 'http://localhost:8090/GestionEntretien/Login/';

  get user(): Users {
    if (this._user == null) {
      this._user = new Users();
    }
    return this._user;
  }

  constructor(private http: HttpClient ) {}

 public errorMsg() {
    if (this.errorS === -1) { return 'Cet Utilisateur existe déja'; }
    else if (this.errorS === -2) { return 'Nom Utilisateur est obligatoire'; }
    else if (this.errorS === -3) { return 'Mot de passe est obligatoire'; }
    else if (this.errorS === -3) { return 'Type est obligatoire'; }
    if (this.errorC === -1 || this.errorC === -2) { return 'Verfier votre Nom D\'Utilisateur ou Mot de passe'; }
 }
 public SuccessMsg() {
    if (this.errorS === 1) { return 'registered succefully'; }
    if (this.errorC === 1) { return 'success'; }
 }

 public connect( usernamee: string , passwordd: string) {
    this.http.get<number>(this.url + 'Connect/username/' + usernamee + '/password/' + passwordd).subscribe(
      data => {
        this.errorC = data;
      if (this.errorC === 1) {
        window.location.href = 'http://localhost:4200/actions';
      }
      },
      error =>
        console.log(error)
    );
 }


}

