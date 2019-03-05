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
var action_sheet_1 = require("./action-sheet");
var base_mock_1 = require("../base.mock");
var METHODS = [
    'create'
];
var ActionSheetControllerMock = /** @class */ (function (_super) {
    __extends(ActionSheetControllerMock, _super);
    function ActionSheetControllerMock(actionSheet) {
        var _this = _super.call(this, 'ActionSheet', METHODS) || this;
        _this.spyObj.create.and.returnValue(actionSheet || new action_sheet_1.ActionSheetMock());
        return _this;
    }
    return ActionSheetControllerMock;
}(base_mock_1.BaseMock));
exports.ActionSheetControllerMock = ActionSheetControllerMock;
//# sourceMappingURL=action-sheet-controller.js.map