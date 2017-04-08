import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

// 3rd Party
import { AgmCoreModule } from 'angular2-google-maps/core';

// App Services
import { AppDetailsService } from './services/app-details.service';

// App Components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { ErrorRetrievingLocationDialogComponent } from './error-retrieving-location-dialog/error-retrieving-location-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MapComponent,
    ErrorRetrievingLocationDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'map', component: MapComponent },
      { path: 'login', component: LoginComponent },
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCgIV6IM82_ySNaGaopPe1UaUwXl1sJoQw'
    })
  ],
  entryComponents: [ErrorRetrievingLocationDialogComponent],
  providers: [AppDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
