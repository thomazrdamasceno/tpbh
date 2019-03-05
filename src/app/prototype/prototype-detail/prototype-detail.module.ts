import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrototypeDetailPage } from './prototype-detail.page';
import { WidgetsModule } from '../../widgets/widgets.module';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

const routes: Routes = [
  {
    path: '',
    component: PrototypeDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WidgetsModule,
    CodemirrorModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrototypeDetailPage]
})
export class PrototypeDetailPageModule {}
