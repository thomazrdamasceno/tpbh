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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var products_service_1 = require("../../../../products/shared/products.service");
var storage_1 = require("@ionic/storage");
var router_1 = require("@angular/router");
var storage_2 = require("@angular/fire/storage");
var file_service_1 = require("../../../../shared/file-service/file.service");
var STORAGE_KEY = 'productInCadStep';
var OtherInfosPage = /** @class */ (function () {
    function OtherInfosPage(fileService, storage, fireStorage, ref, productsService, router) {
        this.fileService = fileService;
        this.storage = storage;
        this.fireStorage = fireStorage;
        this.ref = ref;
        this.productsService = productsService;
        this.router = router;
        this.loading = false; //Geral
        this.tasks = [];
    }
    OtherInfosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (data) {
            _this.product = data;
            _this.product.files = _this.product.files || [];
        });
    };
    OtherInfosPage.prototype.saveItem = function (product) {
        var _this = this;
        console.log("Produto a ser salvo: ");
        console.log(product);
        product.imgs = product.imgs || [];
        this.loading = true;
        this.productsService.addOrUpdate(product).then(function () {
            _this.storage.remove(STORAGE_KEY).then(function () {
                _this.loading = false;
                _this.router.navigateByUrl('/user-account/product/step-cad/end');
            });
        });
    };
    OtherInfosPage.prototype.removeFile = function (pos) {
        //TODO deletar arquivo do servidor
        this.product.files.splice(pos, 1);
        this.ref.detectChanges();
    };
    OtherInfosPage.prototype.uploadFiles = function (event) {
        var _this = this;
        this.loading = true;
        for (var _i = 0, _a = event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            var upload = {};
            var filePath = this.fileService.getFilePath(file);
            var ref = this.fireStorage.ref(filePath);
            var task = ref.put(file);
            upload.progress = task.percentageChanges();
            upload.name = file.name;
            upload.filePath = filePath;
            this.tasks.push(task);
            this.product.files.push(upload);
        }
        Promise.all(this.tasks).then(function () { return __awaiter(_this, void 0, void 0, function () {
            var _i, _a, up, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.loading = false;
                        _i = 0, _a = this.product.files;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        up = _a[_i];
                        delete up.progress;
                        _b = up;
                        return [4 /*yield*/, this.fireStorage.ref(up.filePath).getDownloadURL().toPromise()];
                    case 2:
                        _b.fileLink = _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    OtherInfosPage = __decorate([
        core_1.Component({
            selector: 'app-other-infos',
            templateUrl: './other-infos.page.html',
            styleUrls: ['./other-infos.page.scss'],
        }),
        __metadata("design:paramtypes", [file_service_1.FileService,
            storage_1.Storage,
            storage_2.AngularFireStorage,
            core_1.ChangeDetectorRef,
            products_service_1.ProductsService,
            router_1.Router])
    ], OtherInfosPage);
    return OtherInfosPage;
}());
exports.OtherInfosPage = OtherInfosPage;
//# sourceMappingURL=other-infos.page.js.map