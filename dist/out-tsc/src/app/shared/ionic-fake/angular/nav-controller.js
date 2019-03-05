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
var view_controller_1 = require("./view-controller");
var base_mock_1 = require("../base.mock");
var rxjs_1 = require("rxjs");
var METHODS = [
    'goToRoot',
    'initPane',
    'paneChanged',
    'push',
    'insert',
    'insertPage',
    'pop',
    'popTo',
    'popToRoot',
    'popAll',
    'remove',
    'removeView',
    'setRoot',
    'setPages',
    'hasChildren',
    'getActiveChildNav',
    'registerChildNav',
    'unregisterChildNav',
    'destroy',
    'swipeBackStart',
    'swipeBackProgress',
    'swipeBackEnd',
    'canSwipeBack',
    'canGoBack',
    'isTransitioning',
    'setTransitioning',
    'getActive',
    'isActive',
    'getByIndex',
    'getPrevious',
    'first',
    'last',
    'indexOf',
    'length',
    'getViews',
    'isSwipeBackEnabled',
    'dismissPageChangeViews',
    'setViewPort',
    'resize',
    'viewDidEnter',
    'viewDidLeave',
    'viewDidLoad',
    'viewWillEnter',
    'viewWillLeave',
    'viewWillUnload'
];
var NavControllerMock = /** @class */ (function (_super) {
    __extends(NavControllerMock, _super);
    function NavControllerMock() {
        var _this = _super.call(this, 'NavController', METHODS) || this;
        _this.spyObj.goToRoot.and.returnValue(Promise.resolve());
        _this.spyObj.initPane.and.returnValue(1);
        _this.spyObj.push.and.returnValue(Promise.resolve());
        _this.spyObj.insert.and.returnValue(Promise.resolve());
        _this.spyObj.insertPage.and.returnValue(Promise.resolve());
        _this.spyObj.pop.and.returnValue(Promise.resolve());
        _this.spyObj.popTo.and.returnValue(Promise.resolve());
        _this.spyObj.popToRoot.and.returnValue(Promise.resolve());
        _this.spyObj.popAll.and.returnValue(Promise.resolve());
        _this.spyObj.remove.and.returnValue(Promise.resolve());
        _this.spyObj.removeView.and.returnValue(Promise.resolve());
        _this.spyObj.setRoot.and.returnValue(Promise.resolve());
        _this.spyObj.setPages.and.returnValue(Promise.resolve());
        _this.spyObj.hasChildren.and.returnValue(true);
        _this.spyObj.canSwipeBack.and.returnValue(true);
        _this.spyObj.canGoBack.and.returnValue(true);
        _this.spyObj.isTransitioning.and.returnValue(false);
        _this.spyObj.isActive.and.returnValue(true);
        _this.spyObj.getActive.and.returnValue(new view_controller_1.ViewControllerMock());
        _this.spyObj.getByIndex.and.returnValue(new view_controller_1.ViewControllerMock());
        _this.spyObj.getPrevious.and.returnValue(new view_controller_1.ViewControllerMock());
        _this.spyObj.first.and.returnValue(new view_controller_1.ViewControllerMock());
        _this.spyObj.last.and.returnValue(new view_controller_1.ViewControllerMock());
        _this.spyObj.indexOf.and.returnValue(0);
        _this.spyObj.getViews.and.returnValue([]);
        _this.spyObj.isSwipeBackEnabled.and.returnValue(true);
        _this.spyObj.viewDidEnter = rxjs_1.of();
        _this.spyObj.viewDidLeave = rxjs_1.of();
        _this.spyObj.viewDidLoad = rxjs_1.of();
        _this.spyObj.viewWillEnter = rxjs_1.of();
        _this.spyObj.viewWillLeave = rxjs_1.of();
        _this.spyObj.viewWillUnload = rxjs_1.of();
        _this.spyObj['length'].and.returnValue(0);
        _this.spyObj['root'] = new view_controller_1.ViewControllerMock();
        _this.spyObj['rootParams'] = {};
        return _this;
    }
    return NavControllerMock;
}(base_mock_1.BaseMock));
exports.NavControllerMock = NavControllerMock;
//# sourceMappingURL=nav-controller.js.map