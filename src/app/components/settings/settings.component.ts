import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig } from "@angular/material";

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html'
})

export class SettingsComponent {

  constructor(

    public vcr: ViewContainerRef
  ) { }


}
