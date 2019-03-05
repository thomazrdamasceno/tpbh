"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_mock_module_1 = require("./firebase-mock.module");
describe('FirebaseMockModule', function () {
    var firebaseMockModule;
    beforeEach(function () {
        firebaseMockModule = new firebase_mock_module_1.FirebaseMockModule();
    });
    it('should create an instance', function () {
        expect(firebaseMockModule).toBeTruthy();
    });
});
//# sourceMappingURL=firebase-mock.module.spec.js.map