import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { RequestService } from './request.service';

@Component({
  selector: 'approval-request',
  templateUrl: './request.component.html'
})

export class ApprovalRequestComponent {

  @Input('object') obj: any;

  @Output('requestBack') back = new EventEmitter();
  @Output('operation') operation = new EventEmitter();

  constructor () { }

  ngOnInit() { }

  emmitRequest () {
    this.back.emit(this.obj);
  }

}
