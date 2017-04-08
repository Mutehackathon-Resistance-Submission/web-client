import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomelessTrackingService {

  constructor(private http: Http) { }

  submitHomelessSighting(lat: Number, lon: Number, picture: string, extraInfo: any): Observable<any> {
    console.log('homeless sighting');
    return this.http
      .post('http://localhost:3000/sightings', {
        lat: lat,
        lon: lon,
        timestamp: Date.now(),
        picture: picture,
        extraInfo: JSON.stringify(extraInfo)
      })
      .map(response => {
        return response === null? {success: false}: JSON.parse(response['_body']);
      });
  }

}
