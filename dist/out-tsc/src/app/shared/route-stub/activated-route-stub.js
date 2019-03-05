"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var ActivatedRouteStub = /** @class */ (function () {
    function ActivatedRouteStub() {
        //Observable that contains a map of the parameters
        this.subjectParamMap = new rxjs_1.BehaviorSubject(router_1.convertToParamMap(this.testParamMap));
        this.paramMap = this.subjectParamMap.asObservable();
        //Observable that contains a map of the query parameters
        this.subjectQueryParamMap = new rxjs_1.BehaviorSubject(router_1.convertToParamMap(this.testParamMap));
        this.queryParamMap = this.subjectQueryParamMap.asObservable();
        this.snapshot = {
            paramMap: this.testParamMap,
            queryParamMap: this.testQueryParamMap
        };
    }
    Object.defineProperty(ActivatedRouteStub.prototype, "testParamMap", {
        get: function () {
            return this._testParamMap;
        },
        set: function (params) {
            this._testParamMap = router_1.convertToParamMap(params);
            this.subjectParamMap.next(this._testParamMap);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteStub.prototype, "testQueryParamMap", {
        get: function () {
            return this._testQueryParamMap;
        },
        set: function (params) {
            this._testQueryParamMap = router_1.convertToParamMap(params);
            this.subjectQueryParamMap.next(this._testQueryParamMap);
        },
        enumerable: true,
        configurable: true
    });
    ActivatedRouteStub = __decorate([
        core_1.Injectable()
    ], ActivatedRouteStub);
    return ActivatedRouteStub;
}());
exports.ActivatedRouteStub = ActivatedRouteStub;
//# sourceMappingURL=activated-route-stub.js.map