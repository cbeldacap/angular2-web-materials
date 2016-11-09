import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class SecurityService {

  constructor (private router: Router) { }

  doLogin (username: string, password: string) {
    // needed validations
    this.router.navigate(['/main']);
  }

  logOut() {
    // needed validations
    this.router.navigate(['/login']);
  }

}
