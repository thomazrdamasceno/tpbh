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
var alert_1 = require("./alert");
var base_mock_1 = require("../base.mock");
var METHODS = ['create'];
var AlertControllerMock = /** @class */ (function (_super) {
    __extends(AlertControllerMock, _super);
    function AlertControllerMock(alertMock) {
        var _this = _super.call(this, 'AlertController', METHODS) || this;
        _this.spyObj.create.and.returnValue(alertMock || new alert_1.AlertMock());
        return _this;
    }
    return AlertControllerMock;
}(base_mock_1.BaseMock));
exports.AlertControllerMock = AlertControllerMock;
//# sourceMappingURL=alert-controller.js.map