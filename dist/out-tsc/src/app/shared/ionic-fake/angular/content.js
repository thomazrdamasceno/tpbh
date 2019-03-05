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
    'addImg',
    'getContentDimensions',
    'getFixedElement',
    'resize',
    'scrollTo',
    'scrollToBottom',
    'scrollToTop'
];
var ContentMock = /** @class */ (function (_super) {
    __extends(ContentMock, _super);
    function ContentMock() {
        var _this = _super.call(this, 'Content', METHODS) || this;
        _this['contentBottom'] = 10;
        _this['contentHeight'] = 10;
        _this['contentTop'] = 10;
        _this['directionX'] = 'left';
        _this['directionY'] = 'up';
        _this['isScrolling'] = false;
        _this['scrollHeight'] = 10;
        _this['scrollLeft'] = 10;
        _this['scrollTop'] = 10;
        _this['scrollWidth'] = 10;
        _this.spyObj.getContentDimensions.and.returnValue({});
        _this.spyObj.scrollTo.and.returnValue(Promise.resolve());
        _this.spyObj.scrollToBottom.and.returnValue(Promise.resolve());
        _this.spyObj.scrollToTop.and.returnValue(Promise.resolve());
        return _this;
    }
    return ContentMock;
}(base_mock_1.BaseMock));
exports.ContentMock = ContentMock;
//# sourceMappingURL=content.js.map