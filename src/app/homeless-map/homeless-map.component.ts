import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
    private homelessTracking: HomelessTrackingService,
    private route: Router) {

    this.homelessCoords = [];
    this.mapConfig = null;

  }

  ngOnInit() {

    this.gpsTracking.getLatLon$().subscribe(coord => {
      this.mapConfig = coord;
    });

    this.homelessTracking.getAllHomelessSightings().subscribe(homeless => {
      console.log("HOMELES::", homeless);
      this.homelessCoords = homeless;
      let pot = this.route.url.split("/");
      if (!isNaN(parseInt(pot[pot.length - 1]))) {
        let timestamp = parseInt(pot[pot.length - 1]);
        this.homelessCoords.forEach(hobo => {

          if (hobo.timestamp === timestamp) {
            this.mapConfig = {
              lat: hobo.latitude,
              lon: hobo.longitude
            }
            console.log("MY HOBO:", hobo)
          }

        });
      }
    });

  }

}
