import { Component, OnInit } from '@angular/core';

import { HomelessTrackingService } from '../services/homeless-tracking.service';

@Component({
  selector: 'app-homeless-listing',
  templateUrl: './homeless-listing.component.html',
  styleUrls: ['./homeless-listing.component.css']
})
export class HomelessListingComponent implements OnInit {

  listing: any[];

  constructor(private tracking: HomelessTrackingService) { 
    this.listing = [];
  }

  ngOnInit() {

    this.tracking.getAllHomelessSightings().subscribe(results => {
      console.log('Listings: ', results);
      this.listing = results;
    });

  }

}
