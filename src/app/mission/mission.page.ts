import { Component, OnInit } from '@angular/core';
import { Mission } from '../Models/mission.model';
import {Observable} from 'rxjs';
import {MissionService} from '../services/mission.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.page.html',
  styleUrls: ['./mission.page.scss'],
})
export class MissionPage implements OnInit {
    missions: Mission[];
    mission: Mission;
    observableMissions: Observable<Mission[]>;

  constructor(private missionService: MissionService) { }

    // private getMissionId(): string {
    //     return window.location.pathname.split('/').pop();
    // }

    ngOnInit() {
        this.missionService.getMissions().subscribe(result => {
            this.missions = result;
        });
        //
        // const missionId = this.getMissionId;
        // console.log(missionId);

        setTimeout(() => {
                this.observableMissions = this.missionService.getMissions();
        }, 2000);
  }

  getOneMission(missionId: string) {
    this.missionService.getOneMission(missionId).subscribe(result => {
        this.mission = result;
    });
  }

}
