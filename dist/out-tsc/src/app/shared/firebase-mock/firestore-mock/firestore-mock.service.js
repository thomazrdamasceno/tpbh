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
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var data_stub_service_1 = require("../../data-stub/data-stub.service");
var FirestoreMock = /** @class */ (function () {
    function FirestoreMock(dataStub) {
        this.dataStub = dataStub;
    }
    FirestoreMock.prototype.createId = function () {
        return "id-" + new Date().getTime();
    };
    FirestoreMock.prototype.collection = function (path, queryFn) {
        var _this = this;
        console.log("path aqui: ");
        console.log(path);
        return {
            valueChanges: function () {
                var itens = _this.dataStub.get(path);
                console.log("Itens antes da conversão");
                console.log(itens);
                //Transforma a collection em um
                var array = [];
                for (var key in itens) {
                    array.push(itens[key]);
                }
                console.log("Itens aqui: ");
                console.log(array);
                //Filtra os itens
                if (queryFn) {
                    console.log("Lista de argumentos: ");
                    //console.log(queryFn.);
                }
                var observable = new rxjs_1.Observable(function (observer) {
                    observer.next(array);
                    observer.complete();
                }).pipe(operators_1.delay(2000));
                return observable;
            }
        };
    };
    FirestoreMock.prototype.doc = function (path) {
        var _this = this;
        return {
            valueChanges: function () {
                console.log("Path aqu: ");
                console.log(path);
                var item = _this.dataStub.get(path);
                console.log("Item recuperado aqui: ");
                console.log(item);
                var observable = new rxjs_1.Observable(function (observer) {
                    observer.next(item);
                    observer.complete();
                }).pipe(operators_1.delay(2000));
                return observable;
            },
            delete: function () {
                var promise = new Promise(function (resolve, reject) {
                    _this.dataStub.delete(path);
                    resolve();
                });
                return promise;
            },
            set: function (object) {
                var promise = new Promise(function (resolve, reject) {
                    var item = _this.dataStub.setOrUpdate(path, object, 1 /* SET */);
                    resolve(item);
                });
                return promise;
            },
            update: function (object) {
                var promise = new Promise(function (resolve, reject) {
                    var item = _this.dataStub.setOrUpdate(path, object, 2 /* UPDATE */);
                    resolve(item);
                });
                return promise;
            }
        };
    };
    FirestoreMock = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [data_stub_service_1.DataStubService])
    ], FirestoreMock);
    return FirestoreMock;
}());
exports.FirestoreMock = FirestoreMock;
//# sourceMappingURL=firestore-mock.service.js.map