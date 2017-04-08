import { Injectable } from '@angular/core';

@Injectable()
export class AppDetailsService {

  appName: string;

  constructor() {
    this.appName = 'Homeless Tracker';
  }

  getAppName(): string {
    return this.appName;
  }

}
