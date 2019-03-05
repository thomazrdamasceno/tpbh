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
var base_mock_1 = require("../base.mock");
var METHODS = [
    'get',
    'getBoolean',
    'getNumber',
    'set',
    'settings',
    'setModeConfig',
    'getModeConfig',
    'setTransition',
    'getTransition'
];
var ConfigMock = /** @class */ (function (_super) {
    __extends(ConfigMock, _super);
    function ConfigMock() {
        var _this = _super.call(this, 'Config', METHODS) || this;
        _this.spyObj.get.and.returnValue('');
        _this.spyObj.getBoolean.and.returnValue(true);
        _this.spyObj.getNumber.and.returnValue(0);
        return _this;
    }
    return ConfigMock;
}(base_mock_1.BaseMock));
exports.ConfigMock = ConfigMock;
//# sourceMappingURL=config.js.map