import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ErrorRetrievingLocationDialogComponent } from '../error-retrieving-location-dialog/error-retrieving-location-dialog.component';
import { Router } from '@angular/router';

import { GpsTrackingService } from '../services/gps-tracking.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mapConfig: any;

  constructor(private dialog: MdDialog, private router: Router, private gpsTracking: GpsTrackingService) {
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

}
