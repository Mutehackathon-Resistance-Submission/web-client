import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  title: string;

  constructor(private router: Router) {
    this.title = '';
  }

  ngOnInit() {

    this.router.events
      .filter(event => event instanceof NavigationStart)
      .map((route: NavigationStart) => {
        switch (route.url) {
          case '/':
            return 'Photolocation';
          case '/map':
            return 'Current Location';
          case '/about':
            return 'About Photolocation';
          case '/howto':
            return 'How To';
          default:
            return '';
        }
      })
      .subscribe((route: string) => {
        console.log(route);
        this.title = route;
      });

  }

}
