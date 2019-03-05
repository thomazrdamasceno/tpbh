"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var firestore_mock_service_1 = require("./firestore-mock.service");
describe('FirestoreMockService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(firestore_mock_service_1.FirestoreMock);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=firestore-mock.service.spec.js.map