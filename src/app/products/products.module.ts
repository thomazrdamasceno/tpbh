import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './shared/products.service';
import { ProductDetailPageModule } from './product-detail/product-detail.module';
import { ProductListPageModule } from './product-list/product-list.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductDetailPageModule,
    ProductListPageModule,
  ],
  declarations: [],
  providers: [
     ProductsService// A instância é compartilhada entre product-detail e product-list
  ]
})
export class ProductsModule { }
