import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const appRootRoutes: Routes = [

 
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'start'
  },
  { path: 'start', loadChildren: './start/start.module#StartPageModule' },
  
  { path: 'register-product', loadChildren: './register-product/register-product.module#RegisterProductPageModule' },

  { path: 'prototype', loadChildren: './prototype/prototype.module#PrototypeModule' },
  { path: 'app-evaluation', loadChildren: './app-evaluation/app-evaluation.module#AppEvaluationPageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsModule' },
  { path: 'veiculo', loadChildren: './products/products.module#ProductsModule' },
  { path: 'favorites', loadChildren: './favorites/favorites.module#FavoritesPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },


];
@NgModule({
  imports: [RouterModule.forRoot(appRootRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
