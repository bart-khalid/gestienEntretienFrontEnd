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

  get users(): Users {
    return  this.loginService.user;
  }

  public connect(usernamee: string , passwordd: string) {
    return this.loginService.connect(usernamee, passwordd);
  }

  islogged(){
    if (this.loginService.isUserLoggedIn()) {
      window.location.href = 'http://localhost:4200/accueil';
    }
  }

  ngOnInit(): void {
   this.islogged();
  }





}
