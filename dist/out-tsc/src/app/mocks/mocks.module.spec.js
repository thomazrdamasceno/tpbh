"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mocks_module_1 = require("./mocks.module");
describe('MocksModule', function () {
    var mocksModule;
    beforeEach(function () {
        mocksModule = new mocks_module_1.MocksModule();
    });
    it('should create an instance', function () {
        expect(mocksModule).toBeTruthy();
    });
});
//# sourceMappingURL=mocks.module.spec.js.map