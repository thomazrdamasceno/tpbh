"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var message_service_1 = require("./message.service");
var mock_imports_1 = require("../../../shared/ionic-fake/mock.imports");
var mock_providers_1 = require("../../../shared/ionic-fake/mock.providers");
var auth_guard_1 = require("../../../shared/user/auth.guard");
describe('MessageService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({
        imports: mock_imports_1.mockImports.concat([]),
        providers: mock_providers_1.mockProviders.concat([
            auth_guard_1.AuthGuard
        ]),
    }); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(message_service_1.MessageService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=message.service.spec.js.map