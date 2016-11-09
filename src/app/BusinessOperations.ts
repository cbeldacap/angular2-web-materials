import { Injectable } from '@angular/core';

@Injectable()
export class BusinessOperations {

  private serverPath = 'http://localhost:3000/';

  public getLogin = this.serverPath + 'login';
  public getRequests = this.serverPath + 'approvalrequests'
  public postApproval = this.serverPath + 'approvals/'

  constructor () { }

}
