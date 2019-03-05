"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var user_service_1 = require("./user.service");
var mock_imports_1 = require("../ionic-fake/mock.imports");
var mock_providers_1 = require("../ionic-fake/mock.providers");
describe('UserService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({
        imports: mock_imports_1.mockImports.concat([]),
        providers: mock_providers_1.mockProviders.concat([]),
    }); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(user_service_1.UserService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=user.service.spec.js.map