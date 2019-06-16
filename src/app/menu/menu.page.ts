import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath: string;

  pages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'Missions',
      url: '/menu/missions',
      icon : 'locate'
    },
    {
      title: 'Payloads',
      url: '/menu/payloads',
      icon: 'cube'
    },
    {
      title: 'Rockets',
      url: '/menu/first',
      icon: 'jet'
    },
    {
      title: 'Second',
      url: '/menu/second',
      icon: 'home'
    },
    {
      title: 'Départs',
      url: '/menu/launches',
      icon: 'clock'
    }
  ];
  constructor(
    private router: Router,
    public progress: NgProgress
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
    this.progress.start();

    setTimeout(() => {
      /** progress ends after 2 seconds */
      this.progress.done();
    }, 10000);
  }

}
