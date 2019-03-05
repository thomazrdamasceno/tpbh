"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var fire_auth_stub_service_1 = require("./fire-auth-stub.service");
describe('FireAuthStubService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(fire_auth_stub_service_1.FireAuthStub);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=fire-auth-stub.service.spec.js.map