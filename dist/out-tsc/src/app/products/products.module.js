"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var products_routing_module_1 = require("./products-routing.module");
var product_detail_module_1 = require("./product-detail/product-detail.module");
var product_list_module_1 = require("./product-list/product-list.module");
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                products_routing_module_1.ProductsRoutingModule,
                product_detail_module_1.ProductDetailPageModule,
                product_list_module_1.ProductListPageModule,
            ],
            declarations: [],
            providers: [
            //ProductsService
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map