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
var Product_model_1 = require("../../../../models/Product.model");
var storage_1 = require("@ionic/storage");
var forms_1 = require("@angular/forms");
var products_service_1 = require("../../../../products/shared/products.service");
var STORAGE_KEY = 'productInCadStep';
var SubCategoryPage = /** @class */ (function () {
    function SubCategoryPage(productService, storage, formBuilder) {
        this.productService = productService;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.product = new Product_model_1.Product();
        this.productForm = this.formBuilder.group({
            subcategory: ['', forms_1.Validators.required]
        });
    }
    SubCategoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (data) {
            _this.product = data;
            _this.productService.getAllSubCategories(_this.product.category.id).subscribe(function (data) {
                _this.productSubcategories = data;
            });
        });
    };
    SubCategoryPage = __decorate([
        core_1.Component({
            selector: 'app-sub-category',
            templateUrl: './sub-category.page.html',
            styleUrls: ['./sub-category.page.scss'],
        }),
        __metadata("design:paramtypes", [products_service_1.ProductsService,
            storage_1.Storage,
            forms_1.FormBuilder])
    ], SubCategoryPage);
    return SubCategoryPage;
}());
exports.SubCategoryPage = SubCategoryPage;
//# sourceMappingURL=sub-category.page.js.map