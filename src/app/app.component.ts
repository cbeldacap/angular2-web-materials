import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  isDarkTheme: boolean = false;

  constructor(
    public dialog: MdDialog,
    public vcr: ViewContainerRef
  ) {}

  changeTheme(event: any) {
    this.isDarkTheme = !this.isDarkTheme;
  }


}
