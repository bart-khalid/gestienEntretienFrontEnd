import { Injectable } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router,
              private authService: AuthenticationService,
              private loginService: LoginService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }

}
