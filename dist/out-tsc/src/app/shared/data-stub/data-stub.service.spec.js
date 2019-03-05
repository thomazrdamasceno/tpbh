"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var data_stub_service_1 = require("./data-stub.service");
describe('DataStubService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(data_stub_service_1.DataStubService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=data-stub.service.spec.js.map