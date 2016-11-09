import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { BusinessOperations } from '../../BusinessOperations';

@Injectable()
export class MainService {

  BO: BusinessOperations = new BusinessOperations();
  constructor(private http: Http) {

  }

  getRequests() {
    return this.http.get(this.BO.getRequests)
        .map(res => res.json());
  }

}
