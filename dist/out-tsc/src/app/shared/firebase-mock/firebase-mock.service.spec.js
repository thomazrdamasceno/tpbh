"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var firebase_mock_service_1 = require("./firebase-mock.service");
describe('FirebaseMockService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(firebase_mock_service_1.FirebaseMockService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=firebase-mock.service.spec.js.map