import { Component, OnInit } from '@angular/core';

import { HomelessTrackingService } from '../services/homeless-tracking.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homeless-listing',
  templateUrl: './homeless-listing.component.html',
  styleUrls: ['./homeless-listing.component.css']
})
export class HomelessListingComponent implements OnInit {

  listing: any[];

  constructor(private tracking: HomelessTrackingService, private route: Router) { 
    this.listing = [];
  }

  ngOnInit() {

    this.tracking.getAllHomelessSightings().subscribe(results => {
      console.log('Listings: ', results);
      this.listing = results;
    });

  }

  viewHobo(hobo: any): void {
    console.log(hobo);
    this.route.navigate([`admin/map/${hobo.timestamp}`]);
  } 

}
