"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Product_model_1 = require("../../models/Product.model");
var products_service_1 = require("../shared/products.service");
var router_1 = require("@angular/router");
var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(service, actRoute) {
        this.service = service;
        this.actRoute = actRoute;
        this.item = new Product_model_1.Product();
    }
    ProductDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.paramMap.subscribe(function (data) {
            var id = data.get('id');
            _this.service.getById(id).subscribe(function (data) {
                _this.item = data;
            });
        });
    };
    ProductDetailPage = __decorate([
        core_1.Component({
            selector: 'app-product-detail',
            templateUrl: './product-detail.page.html',
            styleUrls: ['./product-detail.page.scss'],
        }),
        __metadata("design:paramtypes", [products_service_1.ProductsService, router_1.ActivatedRoute])
    ], ProductDetailPage);
    return ProductDetailPage;
}());
exports.ProductDetailPage = ProductDetailPage;
//# sourceMappingURL=product-detail.page.js.map