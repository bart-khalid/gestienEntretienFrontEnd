import { Injectable } from '@angular/core';
import {Login} from '../model/login.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _login: Login;
  private errorS: number ;
  private errorC: number ;
  private url = 'http://localhost:8090/GestionEntretien/Login/';
  get login(): Login {
    if (this._login == null) {
      this._login = new Login();
    }
    return this._login;
  }
  constructor(private http: HttpClient ) {}


  public save() {
        this.http.post<number>(this.url, this.login).subscribe(
          data => {
            console.log(data);
            this.errorS = data;
            if (data > 0) {
              // window.location.href = 'http://localhost:4200/DeclarationIR';
            }
          }, error => {
            console.log('error');
          }
        );
    }
 public errorMsg() {
   // tslint:disable-next-line:max-line-length
    if (this.errorS === -1) { return 'this user is already existed'; }
    else if (this.errorS === -2) { return 'username est obligatoire'; }
    else if (this.errorS === -3) { return 'password est obligatoire'; }
    else if (this.errorS === -3) { return 'Type est obligatoire'; }
    if (this.errorC === -1 || this.errorC === -2) { return 'Verfier votre login ou mot de passe'; }
 }
 public SuccessMsg() {
    if (this.errorS === 1) { return 'registered succefully'; }
    if (this.errorC === 1) { return 'success'; }
 }

 public connect( usernamee: string , passwordd: string) {
    this.http.get<number>(this.url + 'Connect/username/' + usernamee + '/password/' + passwordd).subscribe(
      data =>
        this.errorC = data,
      error =>
        console.log(error)
    );
 }


}

