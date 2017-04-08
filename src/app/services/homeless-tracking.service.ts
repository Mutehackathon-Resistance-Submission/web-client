import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomelessTrackingService {

  genders = {
    'u': 'Unknown',
    'm': 'Male',
    'f': 'Female'
  };

  races = {
    'u': 'Unknown',
    'w': 'Caucasian',
    'b': 'African American',
    'h': 'Hispanic',
    'a': 'Asian'
  };

  constructor(private http: Http) { }

  submitHomelessSighting(lat: Number, lon: Number, picture: string, extraInfo: any): Observable<any> {
    return this.http
      .post('http://192.168.1.156:3000/sightings', {
        lat: lat,
        lon: lon,
        timestamp: Date.now(),
        picture: picture,
        extrainfo: JSON.stringify(extraInfo)
      })
      .map(response => {
        return response === null ? { success: false } : JSON.parse(response['_body']);
      });
  }

  getAllHomelessSightings(): Observable<any> {
    return this.http
      .get('https://ancient-brook-44784.herokuapp.com/sightings')
      .map(response => {

        if (response === null) {
          return { success: false };
        }

        let obj = JSON.parse(response['_body']);

        console.log(obj);

        obj.forEach((row) => {
          if (row.extrainfo != null) {
            row.extrainfo = JSON.parse(row.extrainfo);
            row.gender = this.genders[row.extrainfo.gender];
            row.race = this.races[row.extrainfo.race];
          }
          return row;
        });

        return obj;

      });
  }

}
