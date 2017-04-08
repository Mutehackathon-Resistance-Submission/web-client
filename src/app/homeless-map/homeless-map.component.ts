import { Component, OnInit } from '@angular/core';

import { HomelessTrackingService } from '../services/homeless-tracking.service';
import { GpsTrackingService } from '../services/gps-tracking.service';

@Component({
  selector: 'app-homeless-map',
  templateUrl: './homeless-map.component.html',
  styleUrls: ['./homeless-map.component.css']
})
export class HomelessMapComponent implements OnInit {

  mapConfig: any;

  homelessCoords: any[];

  constructor(private gpsTracking: GpsTrackingService,
    private homelessTracking: HomelessTrackingService) {

      this.homelessCoords = [];

  }

  ngOnInit() {

    this.gpsTracking.getLatLon$().subscribe(coord => {
      this.mapConfig = coord;
    });

    this.homelessTracking.getAllHomelessSightings().subscribe(homeless => {
      this.homelessCoords = homeless;
    });

  }

}
