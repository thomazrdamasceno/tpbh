"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var fire_messaging_stub_service_1 = require("./fire-messaging-stub.service");
describe('FireMessagingStubService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(fire_messaging_stub_service_1.FireMessagingStub);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=fire-messaging-stub.service.spec.js.map