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
    'register',
    'nextId',
    'deregister',
    'setAsFocused',
    'unsetAsFocused',
    'tabFocus'
];
var FormMock = /** @class */ (function (_super) {
    __extends(FormMock, _super);
    function FormMock() {
        var _this = _super.call(this, 'Form', METHODS) || this;
        _this.spyObj.nextId.and.returnValue(0);
        return _this;
    }
    return FormMock;
}(base_mock_1.BaseMock));
exports.FormMock = FormMock;
//# sourceMappingURL=form.js.map