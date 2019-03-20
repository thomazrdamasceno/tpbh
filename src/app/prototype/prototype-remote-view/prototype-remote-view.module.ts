import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrototypeRemoteViewPage } from './prototype-remote-view.page';
import { WidgetsModule } from '../../widgets/widgets.module';

const routes: Routes = [
  {
    path: '',
    component: PrototypeRemoteViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    WidgetsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrototypeRemoteViewPage]
})
export class PrototypeRemoteViewPageModule {}
