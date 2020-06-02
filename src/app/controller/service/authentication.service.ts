import { Injectable } from '@angular/core';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private loginService: LoginService) { }

  authenticate() {
    console.log(this.loginService.errorC);
    if (this.loginService.errorC === 1) {
      localStorage.setItem('key', this.loginService.currentuser.username);
      return true;
    } else {
      return false;
    }
  }


  isUserLoggedIn() {
    const user = localStorage.getItem('key');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    localStorage.removeItem('username');
  }
}
