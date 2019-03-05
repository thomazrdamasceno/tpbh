"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_data_1 = require("./product-data/product-data");
var product_category_data_1 = require("./product-category-data/product-category-data");
var users_data_1 = require("./users-data/users-data");
var message_group_data_1 = require("./message-group-data/message-group-data");
;
var DataStubService = /** @class */ (function () {
    function DataStubService() {
        //Root Data
        this.data = {
            products: product_data_1.productData,
            productCategories: product_category_data_1.productCategoriesData,
            users: users_data_1.userData,
            messagesGroup: message_group_data_1.messageGroupData
        };
    }
    DataStubService.prototype.setOrUpdate = function (path, object, mode) {
        //set: 'products/1'
        //update 'products'
        //Niveis
        var nvs = path.split("/");
        if (mode === 1 /* SET */) {
            nvs.pop();
        }
        var id = object.id;
        var value = object;
        console.log("nvs: ");
        console.log(nvs);
        console.log("value: ");
        console.log(value);
        switch (nvs.length) {
            case 0:
                ;
                break;
            case 1:
                this.data[nvs[0]][id] = value;
                break;
            case 2:
                this.data[nvs[0]] = this.data[nvs[0]] || {};
                this.data[nvs[0]][nvs[1]][id] = value;
                break;
            case 3:
                this.data[nvs[0]][nvs[1]] = this.data[nvs[0]][nvs[1]] || {};
                this.data[nvs[0]][nvs[1]][nvs[2]][id] = value;
                break;
            case 4:
                this.data[nvs[0]][nvs[1]][nvs[2]] || this.data[nvs[0]][nvs[1]][nvs[2]] || {};
                this.data[nvs[0]][nvs[1]][nvs[2]][nvs[3]][id] = value;
                break;
            case 5:
                this.data[nvs[0]][nvs[1]][nvs[2]][nvs[3]] = this.data[nvs[0]][nvs[1]][nvs[2]][nvs[3]] || {};
                this.data[nvs[0]][nvs[1]][nvs[2]][nvs[3]][nvs[4]][id] = value;
                break;
        }
        console.log("Data: ");
        console.log(this.data);
        return value;
    };
    ;
    DataStubService.prototype.delete = function (path) {
        if (!path)
            return undefined;
        //Niveis
        var nvs = path.split("/");
        console.log("nvs: ");
        console.log(nvs);
        console.log("path: ");
        console.log(path);
        switch (nvs.length) {
            case 0:
                delete this.data;
                break;
            case 1:
                delete this.data[nvs[0]];
                break;
            case 2:
                delete this.data[nvs[0]][nvs[1]];
                break;
            case 3:
                delete this.data[nvs[0]][nvs[1]][nvs[2]];
                break;
            case 4:
                delete this.data[nvs[0]][nvs[1]][nvs[2]][nvs[3]];
                break;
            case 5:
                delete this.data[nvs[0]][nvs[1]][nvs[2]][nvs[3]][nvs[4]];
                break;
        }
        console.log("delete()");
        console.log(this.data);
    };
    ;
    DataStubService.prototype.getArray = function (path) {
        var items = this.get(path);
        //Transforma a collection em um
        var array = [];
        for (var key in items) {
            array.push(items[key]);
        }
        return array;
    };
    DataStubService.prototype.get = function (path) {
        var result;
        if (!path)
            return undefined;
        //Niveis
        var nvs = path.split("/");
        switch (nvs.length) {
            case 0:
                result = this.data;
                break;
            case 1:
                result = this.data[nvs[0]];
                break;
            case 2:
                result = this.data[nvs[0]] ? this.data[nvs[0]][nvs[1]] : undefined;
                break;
            case 3:
                result = this.data[nvs[0]] && this.data[nvs[0]][nvs[1]] ? this.data[nvs[0]][nvs[1]][nvs[2]] : undefined;
                break;
            case 4:
                result = this.data[nvs[0]] && this.data[nvs[0]][nvs[1]] && this.data[nvs[0]][nvs[1]][nvs[2]] ? this.data[nvs[0]][nvs[1]][nvs[2]][nvs[3]] : undefined;
                break;
            case 5:
                result = this.data[nvs[0]] && this.data[nvs[0]][nvs[1]] && this.data[nvs[0]][nvs[1]][nvs[2]] && this.data[nvs[0]][nvs[1]][nvs[2]][nvs[3]] ? this.data[nvs[0]][nvs[1]][nvs[2]][nvs[3]][nvs[4]] : undefined;
                break;
        }
        return result;
    };
    ;
    DataStubService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataStubService);
    return DataStubService;
}());
exports.DataStubService = DataStubService;
//# sourceMappingURL=data-stub.service.js.map