import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  { path: 'list', loadChildren: './prototype-list/prototype-list.module#PrototypeListPageModule' },
  { path: 'detail/:id', loadChildren: './prototype-detail/prototype-detail.module#PrototypeDetailPageModule' },
  { path: 'remote-view', loadChildren: './prototype-remote-view/prototype-remote-view.module#PrototypeRemoteViewPageModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrototypeRoutingModule { }
