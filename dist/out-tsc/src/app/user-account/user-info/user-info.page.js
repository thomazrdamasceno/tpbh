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
var UserInfoPage = /** @class */ (function () {
    function UserInfoPage() {
        this.user = {
            name: 'Thomaz',
            profileImg: 'https://res.cloudinary.com/dyutosily/image/upload/v1544473094/prototipo%20festtiva/avatar1.png',
            password: '123',
            birthDate: '15/09/1991',
            email: 'thomazrd@gmail.com',
            cel: '(31) 99226-7947'
        };
    }
    UserInfoPage.prototype.ngOnInit = function () {
    };
    UserInfoPage = __decorate([
        core_1.Component({
            selector: 'app-user-info',
            templateUrl: './user-info.page.html',
            styleUrls: ['./user-info.page.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], UserInfoPage);
    return UserInfoPage;
}());
exports.UserInfoPage = UserInfoPage;
//# sourceMappingURL=user-info.page.js.map