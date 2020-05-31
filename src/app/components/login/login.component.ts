import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../controller/service/login.service';
import {Router} from '@angular/router';
import {Users} from '../../controller/model/users.model';
import {AuthenticationService} from '../../controller/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router, private auth: AuthenticationService) { }

  get progressLogen(): boolean {
    return this.loginService.progressLogen;
  }
  get users(): Users {
    return  this.loginService.user;
  }
  get errorC(): number {
    return this.loginService.errorC;
  }

  public connect(usernamee: string , passwordd: string) {
    this.loginService.connect(usernamee, passwordd);
    if (this.errorC === -1 || this.errorC === -2) {
      this.users.password = null;
    }
  }

  islogged() {
    if (this.loginService.isUserLoggedIn()) {
      window.location.href = 'http://localhost:4200/accueil';
    }
  }

  ngOnInit(): void {
   this.islogged();
  }
}
