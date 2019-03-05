import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ProductDetailPage } from './product-detail.page';
import { WidgetsModule } from '../../widgets/widgets.module';
import { CanDeactivateGuard } from '../../shared/can-route-change/can-route-change';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WidgetsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [CanDeactivateGuard],
  declarations: [ProductDetailPage]

})
export class ProductDetailPageModule {}
