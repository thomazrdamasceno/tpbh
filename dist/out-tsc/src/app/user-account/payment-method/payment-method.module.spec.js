"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var payment_method_module_1 = require("./payment-method.module");
describe('PaymentMethodModule', function () {
    var paymentMethodModule;
    beforeEach(function () {
        paymentMethodModule = new payment_method_module_1.PaymentMethodModule();
    });
    it('should create an instance', function () {
        expect(paymentMethodModule).toBeTruthy();
    });
});
//# sourceMappingURL=payment-method.module.spec.js.map