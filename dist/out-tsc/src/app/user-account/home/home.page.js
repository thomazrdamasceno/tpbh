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
var BASE_PATH = '/user-account';
var HomePage = /** @class */ (function () {
    function HomePage(router) {
        this.router = router;
        this.menus = [
            {
                header: 'PRODUTOS/SERVIÇOS',
                items: [
                    {
                        header: 'Meus produtos/serviços',
                        iconName: 'list-box',
                        link: this.path('product')
                    },
                    {
                        header: 'Mensagens',
                        iconName: 'chatboxes',
                        link: this.path('message')
                    },
                    {
                        header: 'Minhas compras',
                        iconName: 'list',
                        link: this.path('orders')
                    },
                ]
            },
            {
                header: 'PERFIL',
                items: [
                    {
                        header: 'Meus dados',
                        iconName: 'person',
                        link: this.path('user-info')
                    },
                    {
                        header: 'Meus Endereços',
                        iconName: 'locate',
                        link: this.path('adress')
                    },
                ]
            },
            {
                header: 'OUTROS',
                items: [
                    {
                        header: 'Métodos de pagamento',
                        iconName: 'card',
                        link: this.path('payment-method')
                    },
                    {
                        header: 'Configurações',
                        iconName: 'settings',
                        link: this.path('configuration')
                    }
                ]
            },
        ];
    }
    HomePage.prototype.newProduct = function () {
        this.router.navigateByUrl('/user-account/product/step-cad');
    };
    HomePage.prototype.path = function (path) {
        return BASE_PATH + "/" + path;
    };
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.page.html',
            styleUrls: ['./home.page.scss'],
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=home.page.js.map