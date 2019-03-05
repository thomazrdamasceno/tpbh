"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var auth_guard_1 = require("./auth.guard");
var mock_imports_1 = require("../ionic-fake/mock.imports");
var mock_providers_1 = require("../ionic-fake/mock.providers");
describe('AuthGuard', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: mock_imports_1.mockImports.concat([]),
            providers: mock_providers_1.mockProviders.concat([
                auth_guard_1.AuthGuard
            ]),
        });
    });
    it('should ...', testing_1.inject([auth_guard_1.AuthGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=auth.guard.spec.js.map