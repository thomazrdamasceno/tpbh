"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var generic_service_1 = require("../../shared/generic-service/generic.service");
var firestore_1 = require("@angular/fire/firestore");
var ProductsService = /** @class */ (function (_super) {
    __extends(ProductsService, _super);
    function ProductsService(afs) {
        var _this = _super.call(this, 'products') || this;
        _this.afs = afs;
        return _this;
    }
    ProductsService.prototype.getAllCategories = function () {
        return this.afs.collection("productCategories").valueChanges();
    };
    ProductsService.prototype.getAllSubCategories = function (categoryId) {
        return this.afs.collection("productCategories/" + categoryId + "/sub").valueChanges();
    };
    ProductsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [firestore_1.AngularFirestore])
    ], ProductsService);
    return ProductsService;
}(generic_service_1.GenericService));
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map