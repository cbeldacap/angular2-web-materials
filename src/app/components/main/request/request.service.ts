import { Injectable } from '@angular/core';
import { HttpClient } from '../../../security/http-client.service';
import { BusinessOperations } from '../../../BusinessOperations';

@Injectable()
export class RequestService {

  BO: BusinessOperations = new BusinessOperations();
  constructor(private http: HttpClient) { }

}
