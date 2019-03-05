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
    'present',
    'dismiss'
];
var ActionSheetMock = /** @class */ (function (_super) {
    __extends(ActionSheetMock, _super);
    function ActionSheetMock(actionSheet) {
        var _this = _super.call(this, 'ActionSheet', METHODS) || this;
        _this.spyObj.present.and.returnValue(Promise.resolve());
        _this.spyObj.dismiss.and.returnValue(Promise.resolve());
        return _this;
    }
    return ActionSheetMock;
}(base_mock_1.BaseMock));
exports.ActionSheetMock = ActionSheetMock;
//# sourceMappingURL=action-sheet.js.map