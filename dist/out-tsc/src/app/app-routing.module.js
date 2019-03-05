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
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/products/list'
    },
    { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'help', loadChildren: './help/help.module#HelpModule' },
    { path: 'app-evaluation', loadChildren: './app-evaluation/app-evaluation.module#AppEvaluationModule' },
    { path: 'user-account', loadChildren: './user-account/user-account.module#UserAccountModule' },
    { path: 'products', loadChildren: './products/products.module#ProductsModule' },
    { path: 'shopping-cart', loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartPageModule' },
    { path: 'product-categories', loadChildren: './product-categories/product-categories.module#ProductCategoriesPageModule' },
    { path: 'favorites', loadChildren: './favorites/favorites.module#FavoritesPageModule' },
    { path: 'payment-checkout', loadChildren: './payment-checkout/payment-checkout.module#PaymentCheckoutModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map