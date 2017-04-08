import { Injectable } from '@angular/core';

@Injectable()
export class AppDetailsService {

  appName: string;

  constructor() {
    this.appName = 'Photolocation';
  }

  getAppName(): string {
    return this.appName;
  }

}
