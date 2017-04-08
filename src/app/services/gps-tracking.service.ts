import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class GpsTrackingService {

  private latlon$: ReplaySubject<any>;

  constructor() {

    this.latlon$ = new ReplaySubject<any>(1);

    if ('geolocation' in navigator) {

      navigator.geolocation.watchPosition((pos) => {

        this.latlon$.next({
          'lat': pos.coords.latitude,
          'lon': pos.coords.longitude,
          'zoom': 17
        });

      }, () => {
        this.latlon$.next(null);
      });
    } else {
      this.latlon$.next(null);
    }

  }

  public getLatLon$(): ReplaySubject<any> {
    return this.latlon$;
  }

}
