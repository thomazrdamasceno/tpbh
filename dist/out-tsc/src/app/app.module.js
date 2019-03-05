"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = require("@angular/fire/storage");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var ngx_1 = require("@ionic-native/splash-screen/ngx");
var ngx_2 = require("@ionic-native/status-bar/ngx");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var environment_1 = require("../environments/environment");
var fire_1 = require("@angular/fire");
var firestore_1 = require("@angular/fire/firestore");
var auth_1 = require("@angular/fire/auth");
var auth_service_service_1 = require("./shared/auth-service/auth-service.service");
var widgets_module_1 = require("./widgets/widgets.module");
var messaging_1 = require("@angular/fire/messaging");
var ngx_3 = require("@ionic-native/camera/ngx");
var ngx_4 = require("@ionic-native/File/ngx");
var ngx_5 = require("@ionic-native/ionic-webview/ngx");
var storage_2 = require("@ionic/storage");
var products_service_1 = require("./products/shared/products.service");
var message_service_1 = require("./user-account/message/message-service/message.service");
var fire_auth_stub_service_1 = require("./shared/firebase-mock/fire-auth-stub/fire-auth-stub.service");
var user_service_1 = require("./shared/user-service/user.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebaseConfig),
                firestore_1.AngularFirestoreModule,
                auth_1.AngularFireAuthModule,
                storage_1.AngularFireStorageModule,
                angular_1.IonicModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
                widgets_module_1.WidgetsModule,
                messaging_1.AngularFireMessagingModule,
                storage_2.IonicStorageModule.forRoot()
            ],
            providers: [
                ngx_2.StatusBar,
                ngx_3.Camera,
                ngx_5.WebView,
                ngx_4.File,
                ngx_1.SplashScreen,
                auth_service_service_1.AuthService,
                products_service_1.ProductsService,
                user_service_1.UserService,
                message_service_1.MessageService,
                { provide: auth_1.AngularFireAuth, useClass: fire_auth_stub_service_1.FireAuthStub },
                //{provide: AngularFirestore, useClass: FirestoreMock},
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy }
            ],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map