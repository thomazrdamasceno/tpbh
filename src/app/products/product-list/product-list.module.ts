import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductListPage } from './product-list.page';
import { WidgetsModule } from '../../widgets/widgets.module';
import { ScrollHideDirective } from '../../widgets/scroll-hide/scroll-hide.directive';
import { DefaultHeaderComponent } from '../../widgets/default-header/default-header.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListPage
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
  entryComponents: [DefaultHeaderComponent],
  declarations: [ProductListPage]
})
export class ProductListPageModule {}
