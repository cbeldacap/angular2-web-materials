import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig } from "@angular/material";
import { MainService } from './main.service';
import { data } from '../../mockdata';

@Component({
  selector: 'main',
  templateUrl: './main.component.html'
})

export class MainComponent {

  @ViewChild('sidenav') sidenav: MdSidenav;
  objects: any[];
  currentObject: any = {};
  constructor(
    private service: MainService,
    public dialog: MdDialog,
    public vcr: ViewContainerRef
  ) { }

  ngOnInit() {
    this.objects = data;
  }

  showDetails(obj: any) {
    this.currentObject = obj;
    if(this.sidenav.opened){
      this.sidenav.close();
    }
    else{
      this.sidenav.open();
    }
  }

  newRequest() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
  }



}
