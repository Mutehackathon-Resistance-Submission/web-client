import { Component, OnInit } from '@angular/core';

import { AppDetailsService } from '../services/app-details.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appName: string;

  constructor(private details: AppDetailsService, private router: Router) {
  }

  ngOnInit() {
    this.appName = this.details.getAppName();
  }

  recordSighting(): void {
    this.router.navigate(['/map']);
  }

}
