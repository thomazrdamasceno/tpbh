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
var OnboardingPage = /** @class */ (function () {
    function OnboardingPage() {
        this.slideOpts = {
            effect: 'flip'
        };
        this.slides = [
            {
                sub1: 'Olá! Seja bem vindo(a)!',
                sub2: 'Você não precisa mais sofrer para organizar seu evento!',
                sub3: 'Chegou a Festtiva! Auxiliamos pessoas e empresas a contratarem produtos e serviços para sua festa ou evento de forma mais  fácil, ágil e segura... por meio do nosso app ou website!'
            },
            {
                sub1: 'O que você pode contratar?',
                sub2: 'Bebidas, Buffet, Decoração, Espaço de Evento, Brinquedos, Mobílias e Utensílios, Músicos, Fotógrafos...',
                sub3: '...são 40 categorias de produtos e serviços, dos melhores fornecedores da região, para seu evento!'
            },
            {
                sub1: 'E qual será seu único "esforço"?',
                sub2: 'Você contrata e os nossos fornecedores ajeitam tudo para você no local do seu evento!',
                sub3: 'Seu único trabalho será mesmo o de COMEMORAR! Como deve ser, não é mesmo?'
            }
        ];
    }
    OnboardingPage.prototype.ngOnInit = function () {
    };
    OnboardingPage = __decorate([
        core_1.Component({
            selector: 'app-onboarding',
            templateUrl: './onboarding.page.html',
            styleUrls: ['./onboarding.page.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], OnboardingPage);
    return OnboardingPage;
}());
exports.OnboardingPage = OnboardingPage;
//# sourceMappingURL=onboarding.page.js.map