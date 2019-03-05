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
var forms_1 = require("@angular/forms");
var Adress_model_1 = require("../../../models/Adress.model");
var AdressDetailPage = /** @class */ (function () {
    function AdressDetailPage(formBuilder) {
        this.formBuilder = formBuilder;
        this.adress = new Adress_model_1.Adress();
        this.endForm = this.formBuilder.group({
            city: [
                '',
                forms_1.Validators.compose([forms_1.Validators.required]),
            ],
            state: [
                '',
                forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.email]),
            ],
            neighborhood: [
                '',
                forms_1.Validators.compose([forms_1.Validators.required]),
            ],
            adress: [
                ''
            ],
            zipCode: [
                ''
            ],
            number: [
                ''
            ],
            complement: [
                ''
            ],
        });
    }
    AdressDetailPage.prototype.ngOnInit = function () {
    };
    AdressDetailPage = __decorate([
        core_1.Component({
            selector: 'app-adress-detail',
            templateUrl: './adress-detail.page.html',
            styleUrls: ['./adress-detail.page.scss'],
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], AdressDetailPage);
    return AdressDetailPage;
}());
exports.AdressDetailPage = AdressDetailPage;
//# sourceMappingURL=adress-detail.page.js.map