"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urlBase = "/user-account/";
exports.userAccountRoutes = [
    { path: '', pathMatch: 'full', redirectTo: '/user-account/home', link: urlBase + "/" },
    { path: 'user-info', loadChildren: './user-info/user-info.module#UserInfoModule', link: urlBase + "/user-info" },
    { path: 'message', loadChildren: './message/message.module#MessageModule', link: urlBase + "/message" },
    { path: 'product', loadChildren: './product/product.module#ProductModule', link: urlBase + "/product" },
    { path: 'payment-method', loadChildren: './payment-method/payment-method.module#PaymentMethodModule', link: urlBase + "/payment-method" },
    { path: 'adress', loadChildren: './adress/adress.module#AdressModule', link: urlBase + "/adress" },
    { path: 'home', loadChildren: './home/home.module#HomePageModule', link: urlBase + "/home" },
    { path: 'order', loadChildren: './order/order.module#OrderModule', link: urlBase + "/order" },
    { path: 'configuration', loadChildren: './configuration/configuration.module#ConfigurationPageModule', link: urlBase + "/configuration" },
];
//# sourceMappingURL=user-account-routes.js.map