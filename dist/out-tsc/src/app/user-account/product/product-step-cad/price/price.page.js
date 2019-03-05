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
var NEXT_STEP = 'user-account/product/step-cad/other-infos';
var STORAGE_KEY = 'productInCadStep';
var PricePage = /** @class */ (function () {
    function PricePage(storage, formBuilder) {
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.product = new Product_model_1.Product();
    }
    PricePage.prototype.ngOnInit = function () {
        var _this = this;
        this.productForm = this.formBuilder.group({
            price: ['', forms_1.Validators.required],
            unitDescription: ['']
        });
        this.storage.get(STORAGE_KEY).then(function (data) {
            _this.product = data;
        });
    };
    PricePage = __decorate([
        core_1.Component({
            selector: 'app-price',
            templateUrl: './price.page.html',
            styleUrls: ['./price.page.scss'],
        }),
        __metadata("design:paramtypes", [storage_1.Storage, forms_1.FormBuilder])
    ], PricePage);
    return PricePage;
}());
exports.PricePage = PricePage;
//# sourceMappingURL=price.page.js.map