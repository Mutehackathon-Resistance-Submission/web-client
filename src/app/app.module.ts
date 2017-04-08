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
import { ImageUploadModule } from 'angular2-image-upload';

// App Services
import { AppDetailsService } from './services/app-details.service';
import { GpsTrackingService } from './services/gps-tracking.service';
import { HomelessTrackingService } from './services/homeless-tracking.service';


// App Components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { ErrorRetrievingLocationDialogComponent } from './error-retrieving-location-dialog/error-retrieving-location-dialog.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideContentAreaComponent } from './side-content-area/side-content-area.component';
import { AboutComponent } from './about/about.component';
import { HowToComponent } from './how-to/how-to.component';
import { HomelessListingComponent } from './homeless-listing/homeless-listing.component';
import { HomelessMapComponent } from './homeless-map/homeless-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MapComponent,
    ErrorRetrievingLocationDialogComponent,
    ToolbarComponent,
    SideContentAreaComponent,
    AboutComponent,
    HowToComponent,
    HomelessListingComponent,
    HomelessMapComponent
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
      { path: 'about', component: AboutComponent },
      { path: 'howto', component: HowToComponent },
      { path: 'admin/listing', component: HomelessListingComponent },
      { path: 'admin/map/:id', component: HomelessMapComponent },
      { path: 'admin/map', component: HomelessMapComponent }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCgIV6IM82_ySNaGaopPe1UaUwXl1sJoQw'
    }),
    ImageUploadModule.forRoot()
  ],
  entryComponents: [ErrorRetrievingLocationDialogComponent],
  providers: [
    AppDetailsService,
    GpsTrackingService,
    HomelessTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
