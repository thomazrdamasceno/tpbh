"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cart_module_1 = require("./cart.module");
describe('CartModule', function () {
    var cartModule;
    beforeEach(function () {
        cartModule = new cart_module_1.CartModule();
    });
    it('should create an instance', function () {
        expect(cartModule).toBeTruthy();
    });
});
//# sourceMappingURL=cart.module.spec.js.map