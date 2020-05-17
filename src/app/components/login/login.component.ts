import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../controller/service/login.service';
import {Router} from '@angular/router';
import {Users} from '../../controller/model/users.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  get users(): Users {
    return  this.loginService.user;
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

  public goTo() {
    this.router.navigate(['']);
}

}
