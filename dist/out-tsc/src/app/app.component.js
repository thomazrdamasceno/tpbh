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
var angular_1 = require("@ionic/angular");
var ngx_1 = require("@ionic-native/splash-screen/ngx");
var ngx_2 = require("@ionic-native/status-bar/ngx");
var firebase = require("firebase/app");
var environment_1 = require("../environments/environment");
var router_1 = require("@angular/router");
var auth_service_service_1 = require("./shared/auth-service/auth-service.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(authService, platform, splashScreen, statusBar, route) {
        this.authService = authService;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.route = route;
        this.menuItems = [
            {
                title: 'Início',
                icon: 'home',
                link: 'home'
            },
            {
                title: 'Minha conta',
                icon: 'person',
                link: 'user-account'
            },
            {
                title: 'Carrinho',
                iconPath: 'assets/svg-icons/carrinho.svg',
                iconType: 'svg',
                link: 'shopping-cart'
            },
            {
                title: 'Categorias',
                icon: 'list',
                link: 'product-categories'
            },
            {
                title: 'Ajuda',
                icon: 'help-circle',
                link: 'help'
            },
            {
                title: 'Favoritos',
                icon: 'heart',
                link: 'favorites'
            },
            {
                title: 'Avalie o App',
                icon: 'star',
                link: 'app-evaluation'
            },
        ];
        this.initializeApp();
    }
    AppComponent.prototype.logOut = function () {
        var _this = this;
        this.authService.logoutUser().then(function () {
            _this.route.navigateByUrl('/login');
        });
    };
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        if (!firebase.apps.length) {
            firebase.initializeApp(environment_1.environment.firebaseConfig);
        }
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        __metadata("design:paramtypes", [auth_service_service_1.AuthService,
            angular_1.Platform,
            ngx_1.SplashScreen,
            ngx_2.StatusBar,
            router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map