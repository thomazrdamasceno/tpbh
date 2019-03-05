"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestPage = /** @class */ (function () {
    function TestPage(fixture) {
        this.fixture = fixture;
    }
    TestPage.prototype.query = function (selector) {
        return this.fixture.debugElement.nativeElement.querySelector(selector);
    };
    TestPage.prototype.queryAll = function (selector) {
        return this.fixture.debugElement.nativeElement.querySelectorAll(selector);
    };
    return TestPage;
}());
exports.TestPage = TestPage;
//# sourceMappingURL=test-page.js.map