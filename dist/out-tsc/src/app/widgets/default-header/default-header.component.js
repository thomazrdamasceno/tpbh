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
var DefaultHeaderComponent = /** @class */ (function () {
    function DefaultHeaderComponent() {
    }
    DefaultHeaderComponent.prototype.ngOnInit = function () {
    };
    DefaultHeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-default-header',
            templateUrl: './default-header.component.html',
            styleUrls: ['./default-header.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], DefaultHeaderComponent);
    return DefaultHeaderComponent;
}());
exports.DefaultHeaderComponent = DefaultHeaderComponent;
//# sourceMappingURL=default-header.component.js.map