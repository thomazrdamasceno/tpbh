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
var ProductCategoriesPage = /** @class */ (function () {
    function ProductCategoriesPage() {
        this.categories = [
            { id: '1', label: 'Buffet e Alimentação', color: 'primary', icon: 'animacao' },
            { id: '2', label: 'Música, DJ, Dança e Show', color: 'secondary', icon: 'musicos' },
            { id: '3', label: 'Bebidas e Coquetéis', color: 'tertiary', icon: 'bebidas' },
            { id: '4', label: 'Foto, Vídeo e Estúdio', color: 'success', icon: 'fotografia' },
            { id: '5', label: 'Móveis e Utensílios', color: 'warning', icon: 'mobiliario' },
            { id: '5', label: 'Brinquedos', color: 'danger', icon: 'brinquedo' },
            { id: '7', label: 'Decoração e ambientação', color: 'primary', icon: 'decoracao' },
            { id: '8', label: 'Doçaria', color: 'secondary', icon: 'docaria' },
            { id: '9', label: 'Espaços de eventos', color: 'tertiary', icon: 'espaco' },
            { id: '10', label: 'Animação, mágico, teatro e performance', color: 'success', icon: 'animacao' },
            { id: '11', label: 'Recreação para Crianças', color: 'warning', icon: 'recreacao' },
            { id: '12', label: 'Organização de eventos', color: 'danger', icon: 'org_evento' },
        ];
    }
    ProductCategoriesPage.prototype.ngOnInit = function () {
    };
    ProductCategoriesPage = __decorate([
        core_1.Component({
            selector: 'app-product-categories',
            templateUrl: './product-categories.page.html',
            styleUrls: ['./product-categories.page.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], ProductCategoriesPage);
    return ProductCategoriesPage;
}());
exports.ProductCategoriesPage = ProductCategoriesPage;
//# sourceMappingURL=product-categories.page.js.map