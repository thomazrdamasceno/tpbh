"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_module_1 = require("./products.module");
describe('ProductsModule', function () {
    var productsModule;
    beforeEach(function () {
        productsModule = new products_module_1.ProductsModule();
    });
    it('should create an instance', function () {
        expect(productsModule).toBeTruthy();
    });
});
//# sourceMappingURL=products.module.spec.js.map