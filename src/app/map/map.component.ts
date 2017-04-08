import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ErrorRetrievingLocationDialogComponent } from '../error-retrieving-location-dialog/error-retrieving-location-dialog.component';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';


import { HomelessTrackingService } from '../services/homeless-tracking.service';
import { GpsTrackingService } from '../services/gps-tracking.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mapConfig: any;

  pictureUpladed: string;

  selectedGender: string;

  comments: string;

  genders = [
    { value: 'u', viewValue: 'Unknown' },
    { value: 'm', viewValue: 'Male' },
    { value: 'f', viewValue: 'Female' }
  ];

  selectedRace: string;

  races = [
    { value: 'u', viewValue: 'Unknown' },
    { value: 'w', viewValue: 'Caucasian' },
    { value: 'b', viewValue: 'African American' },
    { value: 'h', viewValue: 'Hispanic' },
    { value: 'a', viewValue: 'Asian' }
  ];

  constructor(private dialog: MdDialog,
    private router: Router,
    private gpsTracking: GpsTrackingService,
    private homelessTracking: HomelessTrackingService,
    private snackBar: MdSnackBar) {

    this.pictureUpladed = null;
    this.mapConfig = null;
    this.selectedGender = 'u';
    this.selectedRace = 'u';
    this.comments = '';
  }

  ngOnInit() {

    this.gpsTracking.getLatLon$().subscribe((pos) => {
      if (pos === null) {
        this.errorOut();
      } else {
        this.mapConfig = pos;
      }
    });

  }

  private errorOut(): void {
    this.dialog.open(ErrorRetrievingLocationDialogComponent)
      .afterClosed()
      .subscribe(result => {
        this.router.navigate(['/']);
      });
  }

  fileUploaded(event): void {
    this.pictureUpladed = event.src;
  }

  submitData(): void {
    if (this.pictureUpladed != null && this.mapConfig != null) {
      this.homelessTracking.submitHomelessSighting(
        this.mapConfig.lat,
        this.mapConfig.lon,
        this.pictureUpladed,
        {}
      )
        .subscribe(response => {
          console.log(response);
          if (response.status === 'success') {
            this.router.navigate(['/']);
            this.snackBar.open('Succesfully Submitted', null, {
              duration: 2000
            });
          }
        }, e => {
          this.snackBar.open('Error Submitting! Please Try Again Later', null, {
            duration: 2000
          });
        });
    }
  }

}
