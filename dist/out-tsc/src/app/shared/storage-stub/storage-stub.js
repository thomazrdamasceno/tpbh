"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StorageStub = /** @class */ (function () {
    function StorageStub() {
        this.data = {};
    }
    StorageStub.prototype.set = function (key, value) {
        this.data[key] = value;
    };
    StorageStub.prototype.get = function (key) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var item = _this.data[key];
            resolve(item);
        });
        return promise;
    };
    StorageStub.prototype.remove = function (key) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var item = _this.data[key];
            delete _this.data[key];
            resolve(item);
        });
        return promise;
    };
    return StorageStub;
}());
exports.StorageStub = StorageStub;
//# sourceMappingURL=storage-stub.js.map