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
var STORAGE_KEY = 'productInCadStep';
var TypeSalePage = /** @class */ (function () {
    function TypeSalePage(storage) {
        this.storage = storage;
        this.options = [
            {
                header: 'Aluguel',
                subheader: 'Ex.: Mesas, cadeiras, brinquedos, talheres, taças, etc.',
                iconSrc: 'assets/svg-icons/aluguel.svg',
                value: 'rent'
            },
            {
                header: 'Venda',
                subheader: 'Ex.: Bebidas, doces, etc.',
                iconSrc: 'assets/svg-icons/venda.svg',
                value: 'sale'
            },
            {
                header: 'Serviços',
                subheader: 'Ex.: Buffet, decoração, espaço de evento, fotografia, músicos, etc.',
                iconSrc: 'assets/svg-icons/contratacao.svg',
                value: 'service'
            }
        ];
        this.product = new Product_model_1.Product();
    }
    TypeSalePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (data) {
            _this.product = data;
        });
    };
    TypeSalePage = __decorate([
        core_1.Component({
            selector: 'app-type-sale',
            templateUrl: './type-sale.page.html',
            styleUrls: ['./type-sale.page.scss'],
        }),
        __metadata("design:paramtypes", [storage_1.Storage])
    ], TypeSalePage);
    return TypeSalePage;
}());
exports.TypeSalePage = TypeSalePage;
//# sourceMappingURL=type-sale.page.js.map