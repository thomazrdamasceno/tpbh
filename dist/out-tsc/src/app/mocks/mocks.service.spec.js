"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var mocks_service_1 = require("./mocks.service");
describe('MocksService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(mocks_service_1.MocksService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=mocks.service.spec.js.map