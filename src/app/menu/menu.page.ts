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
      icon: '/assets/icon/menu/dashboard2.png'
    },
    {
      title: 'Missions',
      url: '/menu/missions',
      icon : '/assets/icon/menu/radar.png'
    },
    {
      title: 'Payloads',
      url: '/menu/payloads',
      icon: '/assets/icon/menu/payload.png'
    },
    {
      title: 'Rockets / Roadster',
      url: '/menu/rockets',
      icon: '/assets/icon/menu/rocket.png'
    },
    {
      title: 'Launches',
      url: '/menu/launches',
      icon: '/assets/icon/menu/cal.png'
    },
    {
      title: 'Launch Pads',
      url: '/menu/launchpads',
      icon: '/assets/icon/menu/arrow.png'
    },
    {
      title: 'Core',
      url: '/menu/cores',
      icon: '/assets/icon/menu/core.png'
    },
    {
      title: 'Landing Pad',
      url: '/menu/landingPads',
      icon: '/assets/icon/menu/landing-pads.svg'
    },
    {
      title: 'Dragon',
      url: '/menu/dragons',
      icon: '/assets/icon/menu/dragon.png'

    },
    {
      title: 'Capsule',
      url: '/menu/all-capsules',
      icon: '/assets/icon/menu/capsule.png'

    },
    {
      title: 'Ship',
      url: '/menu/ships',
      icon: '/assets/icon/menu/ship.png'

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
