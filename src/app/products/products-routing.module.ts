import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '../shared/can-route-change/can-route-change';

const routes: Routes = [

  {path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', loadChildren: './product-list/product-list.module#ProductListPageModule' },
  { path: 'detail/:id', loadChildren: './product-detail/product-detail.module#ProductDetailPageModule', canDeactivate:[CanDeactivateGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
