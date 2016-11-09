import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { SecurityService } from '../../security/security.service';
import { MdInput } from "@angular/material";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [SecurityService]
})

export class LoginComponent {

  @ViewChild('username') username : MdInput;
  @ViewChild('password') password : MdInput;

  @Output('loginResult') loginResult = new EventEmitter();

  constructor (
    private security: SecurityService
  ) { }

  ngOnInit () {
    this.username.focus();
  }

  doLogin () {
    this.security.doLogin(this.username.value, this.password.value);
  }

}
