import { Component, ViewChild, ViewContainerRef, Output, EventEmitter } from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig } from "@angular/material";
import { SettingsComponent } from '../settings/settings.component';
import { SecurityService } from '../../security/security.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  @Output('changeTheme') changeTheme = new EventEmitter();

  constructor (
    public dialog: MdDialog,
    public vcr: ViewContainerRef,
    private security: SecurityService
  ) { }

  emitChangeTheme () {
    // sends the event to its "parent" component --> MainComponent
    this.changeTheme.emit();
  }

  openSettings() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    this.dialog.open(SettingsComponent, config);
  }

  logOut() {
    this.security.logOut();
  }

}
