import { Component, OnInit } from '@angular/core';

import { HomelessTrackingService } from '../services/homeless-tracking.service';
import { Router } from '@angular/router';

import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-homeless-listing',
  templateUrl: './homeless-listing.component.html',
  styleUrls: ['./homeless-listing.component.css']
})
export class HomelessListingComponent implements OnInit {

  listing: any[];

  constructor(private tracking: HomelessTrackingService, private route: Router, private http: Http) {
    this.listing = [];
  }

  ngOnInit() {

    this.tracking.getAllHomelessSightings().subscribe(results => {
      console.log('Listings: ', results);
      this.listing = results;
      this.listing.forEach(hobo => {
        this.http
          .get(`https://ancient-brook-44784.herokuapp.com/picture?timestamp=${hobo.timestamp}`)
          .subscribe(data => {
            hobo.url = data["_body"];
          });
      })
    });

  }

  viewHobo(hobo: any): void {
    console.log(hobo);
    this.route.navigate([`admin/map/${hobo.timestamp}`]);
  }

}
