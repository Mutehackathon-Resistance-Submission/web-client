import { Injectable } from '@angular/core';

@Injectable()
export class AppDetailsService {

  appName: string;

  constructor() {
    this.appName = 'Hobomon GO';
  }

  getAppName(): string {
    return this.appName;
  }

}
