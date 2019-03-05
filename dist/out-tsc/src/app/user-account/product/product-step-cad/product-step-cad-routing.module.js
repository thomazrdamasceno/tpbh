"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'start'
    },
    { path: 'start', loadChildren: './start/start.module#StartPageModule' },
    { path: 'start/:productId', loadChildren: './start/start.module#StartPageModule' },
    { path: 'photo', loadChildren: './product-step-cad-photo/product-step-cad-photo.module#ProductStepCadPhotoPageModule' },
    { path: 'type-sale', loadChildren: './type-sale/type-sale.module#TypeSalePageModule' },
    { path: 'category', loadChildren: './category/category.module#CategoryPageModule' },
    { path: 'sub-category', loadChildren: './sub-category/sub-category.module#SubCategoryPageModule' },
    { path: 'other-infos', loadChildren: './other-infos/other-infos.module#OtherInfosPageModule' },
    { path: 'state', loadChildren: './state/state.module#StatePageModule' },
    { path: 'price', loadChildren: './price/price.module#PricePageModule' },
    { path: 'title', loadChildren: './title/title.module#TitlePageModule' },
    { path: 'description', loadChildren: './description/description.module#DescriptionPageModule' },
    { path: 'end', loadChildren: './end/end.module#EndPageModule' },
];
var ProductStepCadRoutingModule = /** @class */ (function () {
    function ProductStepCadRoutingModule() {
    }
    ProductStepCadRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ProductStepCadRoutingModule);
    return ProductStepCadRoutingModule;
}());
exports.ProductStepCadRoutingModule = ProductStepCadRoutingModule;
//# sourceMappingURL=product-step-cad-routing.module.js.map