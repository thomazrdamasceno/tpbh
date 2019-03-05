"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_module_1 = require("./auth.module");
describe('AuthModule', function () {
    var authModule;
    beforeEach(function () {
        authModule = new auth_module_1.AuthModule();
    });
    it('should create an instance', function () {
        expect(authModule).toBeTruthy();
    });
});
//# sourceMappingURL=auth.module.spec.js.map