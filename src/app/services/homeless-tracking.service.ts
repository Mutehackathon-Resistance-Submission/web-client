import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomelessTrackingService {

  constructor(private http: Http) { }

  submitHomelessSighting(lat: Number, lon: Number, picture: string, extraInfo: any): Observable<any> {
    return this.http
      .post('https://ancient-brook-44784.herokuapp.com/sightings', {
        lat: lat,
        lon: lon,
        timestamp: Date.now(),
        picture: picture,
        extraInfo: JSON.stringify(extraInfo)
      })
      .map(response => {
        return response === null ? { success: false } : JSON.parse(response['_body']);
      });
  }

  getAllHomelessSightings(): Observable<any> {
    return this.http
      .get('https://ancient-brook-44784.herokuapp.com/sightings')
      .map(response => {
        return response === null ? { success: false } : JSON.parse(response['_body']);
      });
  }

}
