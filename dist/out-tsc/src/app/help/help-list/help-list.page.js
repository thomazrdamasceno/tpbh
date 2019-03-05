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
var mocks_service_1 = require("../../mocks/mocks.service");
var HelpListPage = /** @class */ (function () {
    function HelpListPage(service) {
        this.service = service;
    }
    HelpListPage.prototype.ngOnInit = function () {
        this.helps = this.service.getHelps();
    };
    HelpListPage = __decorate([
        core_1.Component({
            selector: 'app-help-list',
            templateUrl: './help-list.page.html',
            styleUrls: ['./help-list.page.scss'],
        }),
        __metadata("design:paramtypes", [mocks_service_1.MocksService])
    ], HelpListPage);
    return HelpListPage;
}());
exports.HelpListPage = HelpListPage;
//# sourceMappingURL=help-list.page.js.map