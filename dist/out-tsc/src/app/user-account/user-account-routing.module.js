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
    { path: '', pathMatch: 'full', redirectTo: '/user-account/home' },
    { path: 'user-info', loadChildren: './user-info/user-info.module#UserInfoModule' },
    { path: 'message', loadChildren: './message/message.module#MessageModule' },
    { path: 'product', loadChildren: './product/product.module#ProductModule' },
    { path: 'payment-method', loadChildren: './payment-method/payment-method.module#PaymentMethodModule' },
    { path: 'adress', loadChildren: './adress/adress.module#AdressModule' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'order', loadChildren: './order/order.module#OrderModule' },
    { path: 'configuration', loadChildren: './configuration/configuration.module#ConfigurationPageModule' },
];
var UserAccountRoutingModule = /** @class */ (function () {
    function UserAccountRoutingModule() {
    }
    UserAccountRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], UserAccountRoutingModule);
    return UserAccountRoutingModule;
}());
exports.UserAccountRoutingModule = UserAccountRoutingModule;
//# sourceMappingURL=user-account-routing.module.js.map