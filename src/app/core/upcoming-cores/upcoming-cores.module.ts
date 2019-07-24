import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpcomingCoresPage } from './upcoming-cores.page';
import {ComponentsModule} from '../../modules/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: UpcomingCoresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpcomingCoresPage]
})
export class UpcomingCoresPageModule {}
