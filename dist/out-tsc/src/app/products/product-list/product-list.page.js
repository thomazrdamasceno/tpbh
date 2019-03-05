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
var products_service_1 = require("../shared/products.service");
var router_1 = require("@angular/router");
var ProductListPage = /** @class */ (function () {
    function ProductListPage(service, router, activatedRoute) {
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ProductListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (data) {
            var categoryId = data.get('categoryId');
            if (categoryId) {
                _this.products$ = _this.service.getByKeyValue('category.id', categoryId);
            }
            else {
                _this.products$ = _this.service.getAll();
            }
        });
    };
    ProductListPage.prototype.toDetail = function (item) {
        this.router.navigateByUrl("/products/detail/" + item.id);
    };
    ProductListPage = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            templateUrl: './product-list.page.html',
            styleUrls: ['./product-list.page.scss'],
        }),
        __metadata("design:paramtypes", [products_service_1.ProductsService, router_1.Router, router_1.ActivatedRoute])
    ], ProductListPage);
    return ProductListPage;
}());
exports.ProductListPage = ProductListPage;
//# sourceMappingURL=product-list.page.js.map