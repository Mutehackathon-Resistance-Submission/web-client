import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ErrorRetrievingLocationDialogComponent } from '../error-retrieving-location-dialog/error-retrieving-location-dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: Number;
  lon: Number;

  constructor(private dialog: MdDialog, private router: Router) {
  }

  ngOnInit() {

    if ("geolocation" in navigator) {

    } else {
      this.dialog.open(ErrorRetrievingLocationDialogComponent)
        .afterClosed()
        .subscribe(result => {
          this.router.navigate(['/']);
        });
    }

    this.lat = 32.2988;
    this.lon = -90.1848;
  }


}
