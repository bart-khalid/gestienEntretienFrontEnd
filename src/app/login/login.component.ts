import { Component, OnInit } from '@angular/core';
import {LoginService} from '../controller/service/login.service';
import {Login} from '../controller/model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  get login(): Login {
    return  this.loginService.login;
  }

  public connect(usernamee: string , passwordd: string) {
    return this.loginService.connect(usernamee, passwordd);
  }

  public SuccessMsg() {
    return this.loginService.SuccessMsg();
  }
  public errorMsg() {
    return this.loginService.errorMsg();
  }

  ngOnInit(): void {
  }

}
