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
var router_1 = require("@angular/router");
var storage_1 = require("@ionic/storage");
var Product_model_1 = require("../../models/Product.model");
var NextStepButtonComponent = /** @class */ (function () {
    function NextStepButtonComponent(router, storage) {
        this.router = router;
        this.storage = storage;
        this.disabled = false;
        this.routes = [
            { name: 'start', path: '/user-account/product/step-cad' },
            { name: 'photo', path: '/user-account/product/step-cad/photo' },
            { name: 'title', path: '/user-account/product/step-cad/title' },
            { name: 'description', path: '/user-account/product/step-cad/description' },
            { name: 'type-sale', path: '/user-account/product/step-cad/type-sale' },
            { name: 'category', path: '/user-account/product/step-cad/category' },
            { name: 'sub-category', path: '/user-account/product/step-cad/sub-category' },
            { name: 'state', path: '/user-account/product/step-cad/state' },
            { name: 'price', path: '/user-account/product/step-cad/price' },
            { name: 'others-infos', path: '/user-account/product/step-cad/other-infos' },
        ];
        this.nextRoute = '';
    }
    NextStepButtonComponent.prototype.ngOnInit = function () {
        this.currentRouter = this.routes[this.getIndexOfRoute(this.router.url)];
        console.log("Rota atual");
        console.log(this.currentRouter.path);
        var indexOfCurrent = this.getIndexOfRoute(this.currentRouter.path);
        var nextIndex = indexOfCurrent + 1;
        this.nextRoute = this.routes[nextIndex].path;
        console.log("nextRoute");
        console.log(this.nextRoute);
    };
    //Trasnforma [{}] em [""]
    NextStepButtonComponent.prototype.getIndexOfRoute = function (route) {
        return this.routes.map(function (r) {
            return r.path;
        }).indexOf(route);
    };
    NextStepButtonComponent.prototype.next = function () {
        if (this.currentRouter.name == 'sub-category' && this.item.typeSale === 'service') {
            var newUrl = this.routes[this.getIndexOfRoute(this.nextRoute) + 1].path;
            this.router.navigateByUrl(newUrl);
        }
        else {
            this.storage.set('productInCadStep', this.item);
            this.router.navigateByUrl(this.nextRoute);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], NextStepButtonComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Product_model_1.Product)
    ], NextStepButtonComponent.prototype, "item", void 0);
    NextStepButtonComponent = __decorate([
        core_1.Component({
            selector: 'app-next-step-button',
            templateUrl: './next-step-button.component.html',
            styleUrls: ['./next-step-button.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router, storage_1.Storage])
    ], NextStepButtonComponent);
    return NextStepButtonComponent;
}());
exports.NextStepButtonComponent = NextStepButtonComponent;
//# sourceMappingURL=next-step-button.component.js.map