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
var base_mock_1 = require("./../base.mock");
var METHODS = ['subscribe', 'publish', 'unsubscribe'];
var EventsMock = /** @class */ (function (_super) {
    __extends(EventsMock, _super);
    function EventsMock() {
        return _super.call(this, 'Events', METHODS) || this;
    }
    return EventsMock;
}(base_mock_1.BaseMock));
exports.EventsMock = EventsMock;
//# sourceMappingURL=events.js.map