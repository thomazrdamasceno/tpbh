"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@ionic-native/core");
var WebViewMock = /** @class */ (function (_super) {
    __extends(WebViewMock, _super);
    function WebViewMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WebViewMock;
}(core_1.IonicNativePlugin));
exports.WebViewMock = WebViewMock;
//# sourceMappingURL=webview-mock.js.map