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
var storage_1 = require("@ionic/storage");
var Product_model_1 = require("../../../../models/Product.model");
var file_service_1 = require("../../../../shared/file-service/file.service");
var storage_2 = require("@angular/fire/storage");
var router_1 = require("@angular/router");
var STORAGE_KEY = 'productInCadStep';
var ProductStepCadPhotoPage = /** @class */ (function () {
    function ProductStepCadPhotoPage(storage, fileService, router, fireStorage) {
        this.storage = storage;
        this.fileService = fileService;
        this.router = router;
        this.fireStorage = fireStorage;
        this.loading = false;
        this.product = new Product_model_1.Product();
    }
    ProductStepCadPhotoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('productInCadStep').then(function (data) {
            _this.product = data;
            var imgs = _this.product.imgs;
            imgs = imgs || [];
        });
    };
    ProductStepCadPhotoPage.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            var productImgs, tasks, files, _i, productImgs_1, img, file, filePath, ref, task;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        productImgs = this.product.imgs;
                        tasks = [];
                        files = [];
                        _i = 0, productImgs_1 = productImgs;
                        _a.label = 1;
                    case 1:
                        if (!(_i < productImgs_1.length)) return [3 /*break*/, 5];
                        img = productImgs_1[_i];
                        file = null;
                        filePath = void 0;
                        if (!(img.indexOf('http') == -1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.transformSrcToFile(img, 'file.jpg')];
                    case 2:
                        file = _a.sent();
                        console.log("File aqui: ");
                        console.log(file);
                        filePath = this.fileService.getFilePath(file);
                        console.log("File path: ");
                        console.log(filePath);
                        ref = this.fireStorage.ref(filePath);
                        task = ref.put(file);
                        tasks.push(task);
                        _a.label = 3;
                    case 3:
                        files.push({
                            src: img,
                            path: filePath
                        });
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5:
                        Promise.all(tasks).then(function () { return __awaiter(_this, void 0, void 0, function () {
                            var newImgs, _i, files_1, file, _a;
                            var _this = this;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        newImgs = [];
                                        console.log("files aqui ");
                                        console.log(files);
                                        _i = 0, files_1 = files;
                                        _b.label = 1;
                                    case 1:
                                        if (!(_i < files_1.length)) return [3 /*break*/, 5];
                                        file = files_1[_i];
                                        if (!file.path) return [3 /*break*/, 3];
                                        //Recupera o link da imagem
                                        console.log("filePath aqui: ");
                                        console.log(file.filePath);
                                        _a = file;
                                        return [4 /*yield*/, this.fireStorage.ref(file.path).getDownloadURL().toPromise()];
                                    case 2:
                                        _a.src = _b.sent();
                                        console.log("file.src: ");
                                        console.log(file.src);
                                        _b.label = 3;
                                    case 3:
                                        newImgs.push(file.src);
                                        _b.label = 4;
                                    case 4:
                                        _i++;
                                        return [3 /*break*/, 1];
                                    case 5:
                                        this.loading = false;
                                        console.log("Imagens atualizadas: ");
                                        console.log(newImgs);
                                        this.product.imgs = newImgs;
                                        this.storage.set(STORAGE_KEY, this.product).then(function () {
                                            _this.router.navigateByUrl('/user-account/product/step-cad/title');
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductStepCadPhotoPage.prototype.transformSrcToFile = function (imagePath, filename) {
        if (imagePath.indexOf('http') != -1) {
            return null;
        }
        var arr = imagePath.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };
    ProductStepCadPhotoPage = __decorate([
        core_1.Component({
            selector: 'app-product-step-cad-photo',
            templateUrl: './product-step-cad-photo.page.html',
            styleUrls: ['./product-step-cad-photo.page.scss'],
        }),
        __metadata("design:paramtypes", [storage_1.Storage,
            file_service_1.FileService,
            router_1.Router,
            storage_2.AngularFireStorage])
    ], ProductStepCadPhotoPage);
    return ProductStepCadPhotoPage;
}());
exports.ProductStepCadPhotoPage = ProductStepCadPhotoPage;
//# sourceMappingURL=product-step-cad-photo.page.js.map