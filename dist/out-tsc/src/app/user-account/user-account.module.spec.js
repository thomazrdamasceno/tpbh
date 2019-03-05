"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_account_module_1 = require("./user-account.module");
describe('UserAccountModule', function () {
    var userAccountModule;
    beforeEach(function () {
        userAccountModule = new user_account_module_1.UserAccountModule();
    });
    it('should create an instance', function () {
        expect(userAccountModule).toBeTruthy();
    });
});
//# sourceMappingURL=user-account.module.spec.js.map