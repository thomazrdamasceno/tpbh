"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var payment_checkout_module_1 = require("./payment-checkout.module");
describe('PaymentCheckoutModule', function () {
    var paymentCheckoutModule;
    beforeEach(function () {
        paymentCheckoutModule = new payment_checkout_module_1.PaymentCheckoutModule();
    });
    it('should create an instance', function () {
        expect(paymentCheckoutModule).toBeTruthy();
    });
});
//# sourceMappingURL=payment-checkout.module.spec.js.map