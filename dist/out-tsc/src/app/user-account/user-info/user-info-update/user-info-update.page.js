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
var UserInfoUpdatePage = /** @class */ (function () {
    function UserInfoUpdatePage(formBuilder) {
        this.formBuilder = formBuilder;
        this.user = {
            name: 'Thomaz',
            password: '123',
            email: 'thomazrd@gmail.com',
            cel: '(31) 992267947'
        };
        this.userInfoForm = this.formBuilder.group({
            name: [
                '',
                forms_1.Validators.compose([forms_1.Validators.required]),
            ],
            email: [
                '',
                forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.email]),
            ],
            tel1: [
                '',
                forms_1.Validators.compose([forms_1.Validators.required]),
            ],
            tel2: [
                ''
            ],
        });
    }
    UserInfoUpdatePage.prototype.ngOnInit = function () {
    };
    UserInfoUpdatePage = __decorate([
        core_1.Component({
            selector: 'app-user-info-update',
            templateUrl: './user-info-update.page.html',
            styleUrls: ['./user-info-update.page.scss'],
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], UserInfoUpdatePage);
    return UserInfoUpdatePage;
}());
exports.UserInfoUpdatePage = UserInfoUpdatePage;
//# sourceMappingURL=user-info-update.page.js.map