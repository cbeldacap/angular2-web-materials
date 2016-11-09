import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

// COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { ApprovalRequestComponent } from './components/main/request/request.component';
import { LoginComponent } from './components/login/Login.component';
import { MainComponent } from './components/main/main.component';
import { SettingsComponent } from './components/settings/settings.component';

// SERVICES
import { SecurityService } from './security/security.service';
import { BusinessOperations } from './BusinessOperations';
import { MainService } from './components/main/main.service';
import { HttpClient } from './security/http-client.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApprovalRequestComponent,
    LoginComponent,
    MainComponent,
    SettingsComponent,
  ],
  entryComponents: [
    AppComponent,
    SettingsComponent
  ],
  providers: [
    SecurityService,
    BusinessOperations,
    FormsModule,
    MainService,
    HttpClient,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
