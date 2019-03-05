"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var type_sale_page_1 = require("./type-sale.page");
var widgets_module_1 = require("../../../../widgets/widgets.module");
var routes = [
    {
        path: '',
        component: type_sale_page_1.TypeSalePage
    }
];
var TypeSalePageModule = /** @class */ (function () {
    function TypeSalePageModule() {
    }
    TypeSalePageModule = __decorate([
        core_1.NgModule({
            imports: [
                widgets_module_1.WidgetsModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [type_sale_page_1.TypeSalePage]
        })
    ], TypeSalePageModule);
    return TypeSalePageModule;
}());
exports.TypeSalePageModule = TypeSalePageModule;
//# sourceMappingURL=type-sale.module.js.map