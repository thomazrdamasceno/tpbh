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
var StartCheckoutPage = /** @class */ (function () {
    function StartCheckoutPage() {
        this.options = [
            { header: 'Cartão de crédito', value: 'credcard', subheader: 'Pague em até 12x', iconName: 'card' },
            { header: 'Boleto', value: 'boleto', iconName: 'paper' }
        ];
    }
    StartCheckoutPage.prototype.ngOnInit = function () {
    };
    StartCheckoutPage = __decorate([
        core_1.Component({
            selector: 'app-start-checkout',
            templateUrl: './start-checkout.page.html',
            styleUrls: ['./start-checkout.page.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], StartCheckoutPage);
    return StartCheckoutPage;
}());
exports.StartCheckoutPage = StartCheckoutPage;
//# sourceMappingURL=start-checkout.page.js.map