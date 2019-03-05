"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var image_service_1 = require("./image.service");
describe('ImageService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(image_service_1.ImageService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=image.service.spec.js.map