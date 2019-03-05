"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var MocksService = /** @class */ (function () {
    function MocksService() {
        this.helps = [
            {
                title: 'Ajuda teste',
                description: 'Descrição da ajuda',
                content: '<h3>dasdasdasdasdas</h3><h4>asdasdasdasd</h4><p>asdasdasdasdasd</p>'
            },
            {
                title: 'Ajuda teste 2',
                description: 'Descrição da ajuda 231231',
                content: '<h3>dasdasdasdasdas</h3><h4>asdasdasdasd</h4><p>asdasdasdasdasd</p>'
            }
        ];
        this.orders = [
            {
                id: '1',
                total: 300,
                products: this.getProducts()
            },
            {
                id: '2',
                total: 350,
                products: this.getProducts()
            },
            {
                id: '3',
                total: 390,
                products: this.getProducts()
            },
            {
                id: '4',
                total: 500,
                products: this.getProducts()
            },
            {
                id: '5',
                total: 200,
                products: this.getProducts()
            }
        ];
        this.products = [
            { id: '1', title: 'title 1', description: 'Decoração para festa infantil.dasdasdasdas..', price: 450, imgs: ['https://res.cloudinary.com/dyutosily/image/upload/v1542368341/prototipo%20festtiva/img.jpg'] },
            { id: '1', title: 'title 2', description: 'Cama elástica 3x3 metros..asdasdasdasda.', price: 550, imgs: ['https://res.cloudinary.com/dyutosily/image/upload/v1542377277/prototipo%20festtiva/D_Q_NP_784345-MLB27914688722_082018-Q.jpg'] },
            { id: '3', title: 'title 3', description: 'Máquina de algodão doce..asdasdasd..', price: 180, imgs: ['https://res.cloudinary.com/dyutosily/image/upload/v1542385335/prototipo%20festtiva/maquina-de-algodao-doce-industrial-frete-gratis.jpg'] },
            { id: '4', title: 'title 4', description: 'Painel festa tema footebol asdasdasdasd', price: 250, imgs: ['https://res.cloudinary.com/dyutosily/image/upload/v1542385472/prototipo%20festtiva/29-2-e1473086054196.jpg'] },
            { id: '5', title: 'title 5', description: 'Decoração para festa infantil... asdasdasdasdasd', price: 450, imgs: ['https://res.cloudinary.com/dyutosily/image/upload/v1542368341/prototipo%20festtiva/img.jpg'] },
            { id: '6', title: 'title 6', description: 'Cama elástica 3x3 metros.. asdasdasdasdas.', price: 550, imgs: ['https://res.cloudinary.com/dyutosily/image/upload/v1542377277/prototipo%20festtiva/D_Q_NP_784345-MLB27914688722_082018-Q.jpg'] },
            { id: '7', title: 'title 7', description: 'Máquina de algodão doce...asdsadasdas.', price: 180, imgs: ['https://res.cloudinary.com/dyutosily/image/upload/v1542385335/prototipo%20festtiva/maquina-de-algodao-doce-industrial-frete-gratis.jpg'] },
            { id: '8', title: 'title 8', description: 'Painel festa tema footebol asdasdasdas', price: 250, imgs: ['https://res.cloudinary.com/dyutosily/image/upload/v1542385472/prototipo%20festtiva/29-2-e1473086054196.jpg'] }
        ];
        this.productCategories = [
            { label: 'Buffet e Alimentação', color: 'primary', icon: 'animacao' },
            { label: 'Música, DJ, Dança e Show', color: 'secondary', icon: 'musicos' },
            { label: 'Bebidas e Coquetéis', color: 'tertiary', icon: 'bebidas' },
            { label: 'Foto, Vídeo e Estúdio', color: 'success', icon: 'fotografia' },
            { label: 'Móveis e Utensílios', color: 'warning', icon: 'mobiliario' },
            { label: 'Brinquedos', color: 'danger', icon: 'brinquedo' },
            { label: 'Decoração e ambientação', color: 'primary', icon: 'decoracao' },
            { label: 'Doçaria', color: 'secondary', icon: 'docaria' },
            { label: 'Espaços de eventos', color: 'tertiary', icon: 'espaco' },
            { label: 'Animação, mágico, teatro e performance', color: 'success', icon: 'animacao' },
            { label: 'Recreação para Crianças', color: 'warning', icon: 'recreacao' },
            { label: 'Organização de eventos', color: 'danger', icon: 'org_evento' },
        ];
        this.eventCategories = [
            { label: 'Casamento' },
            { label: 'Debutante' },
            { label: 'Aniversário' },
            { label: 'Batizado' },
            { label: 'Bodas' },
            { label: 'Chá de bebê' },
            { label: 'Corporativo' },
            { label: 'Infantil' },
            { label: 'Festa Junina' },
            { label: 'Chá bar' },
            { label: 'Formatura' },
            { label: 'Natal' },
        ];
        this.enderecos = [];
    }
    MocksService.prototype.getHelps = function () {
        return this.helps;
    };
    MocksService.prototype.getOrders = function () {
        return this.orders;
    };
    MocksService.prototype.getOrdersAsync = function () {
        var _this = this;
        return new rxjs_1.Observable(function (observe) {
            observe.next(_this.orders);
            observe.complete();
        }).pipe(operators_1.delay(1000));
    };
    MocksService.prototype.getProducts = function () {
        return this.products;
    };
    MocksService.prototype.getAdresses = function () {
        return this.enderecos;
    };
    MocksService.prototype.getProductCategories = function () {
        return this.productCategories;
    };
    MocksService.prototype.getEventCategories = function () {
        return this.eventCategories;
    };
    MocksService.prototype.getEventCategoriesAsync = function () {
        var _this = this;
        return new rxjs_1.Observable(function (observe) {
            observe.next(_this.getEventCategories());
            observe.complete();
        }).pipe(operators_1.delay(1000));
    };
    MocksService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MocksService);
    return MocksService;
}());
exports.MocksService = MocksService;
//# sourceMappingURL=mocks.service.js.map