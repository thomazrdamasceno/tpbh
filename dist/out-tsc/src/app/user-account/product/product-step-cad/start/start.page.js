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
var storage_1 = require("@ionic/storage");
var Product_model_1 = require("../../../../models/Product.model");
var router_1 = require("@angular/router");
var products_service_1 = require("../../../../products/shared/products.service");
var STORAGE_KEY = 'productInCadStep';
var PATH_TO_NEXT_STEP = '/user-account/product/step-cad/photo';
var StartPage = /** @class */ (function () {
    function StartPage(storage, router, activatedRoute, productsService) {
        this.storage = storage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.productsService = productsService;
        this.loading = true;
    }
    StartPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (data) {
            var productIdParam = data.get('productId');
            if (productIdParam) {
                _this.productsService.getById(productIdParam).subscribe(function (data) {
                    _this.productInCadStep = data;
                    _this.storage.set(STORAGE_KEY, data).then(function () {
                        _this.loading = false;
                        _this.router.navigateByUrl(PATH_TO_NEXT_STEP);
                    });
                });
            }
            //Sem parametro
            else {
                _this.storage.get(STORAGE_KEY).then(function (data) {
                    console.log("Data!!! aqui: ");
                    console.log(data);
                    _this.loading = false;
                    _this.productInCadStep = data;
                    if (!_this.productInCadStep) {
                        _this.storage.set(STORAGE_KEY, new Product_model_1.Product()).then(function () {
                            _this.router.navigateByUrl(PATH_TO_NEXT_STEP);
                        });
                    }
                }).catch(function () {
                    _this.loading = false;
                });
            }
        });
    };
    StartPage.prototype.continueEditing = function () {
        this.router.navigateByUrl(PATH_TO_NEXT_STEP);
    };
    StartPage.prototype.newItem = function () {
        var _this = this;
        this.storage.set(STORAGE_KEY, new Product_model_1.Product()).then(function () {
            _this.router.navigateByUrl(PATH_TO_NEXT_STEP);
        });
    };
    StartPage = __decorate([
        core_1.Component({
            selector: 'app-start',
            templateUrl: './start.page.html',
            styleUrls: ['./start.page.scss'],
        }),
        __metadata("design:paramtypes", [storage_1.Storage,
            router_1.Router,
            router_1.ActivatedRoute,
            products_service_1.ProductsService])
    ], StartPage);
    return StartPage;
}());
exports.StartPage = StartPage;
//# sourceMappingURL=start.page.js.map