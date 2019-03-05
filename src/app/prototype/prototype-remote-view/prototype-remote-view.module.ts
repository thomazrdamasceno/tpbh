import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrototypeRemoteViewPage } from './prototype-remote-view.page';
import { CompileModule } from 'p3x-angular-compile';

const routes: Routes = [
  {
    path: '',
    component: PrototypeRemoteViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    //CompileModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrototypeRemoteViewPage]
})
export class PrototypeRemoteViewPageModule {}
