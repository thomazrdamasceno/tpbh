"use strict";
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var start_page_1 = require("./start.page");
var mock_imports_1 = require("../../../../shared/ionic-fake/mock.imports");
var mock_providers_1 = require("../../../../shared/ionic-fake/mock.providers");
var storage_1 = require("@ionic/storage");
var Product_model_1 = require("../../../../models/Product.model");
var router_1 = require("@angular/router");
var products_service_1 = require("../../../../products/shared/products.service");
var data_stub_service_1 = require("../../../../shared/data-stub/data-stub.service");
var STORAGE_KEY = "productInCadStep";
describe('StartPage', function () {
    var component;
    var fixture;
    var page;
    var storage;
    var router;
    var productsService;
    var dataStubService;
    var activatedRouteStub;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: mock_imports_1.mockImports.concat([]),
            providers: mock_providers_1.mockProviders.concat([]),
            declarations: [start_page_1.StartPage],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents().then(function () {
            fixture = testing_1.TestBed.createComponent(start_page_1.StartPage);
            component = fixture.componentInstance;
            fixture.detectChanges();
            page = new StartTestPage(fixture);
            //Injections
            storage = fixture.debugElement.injector.get(storage_1.Storage);
            router = fixture.debugElement.injector.get(router_1.Router);
            productsService = fixture.debugElement.injector.get(products_service_1.ProductsService);
            dataStubService = fixture.debugElement.injector.get(data_stub_service_1.DataStubService);
            activatedRouteStub = fixture.debugElement.injector.get(router_1.ActivatedRoute);
        });
    }));
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('Caso já exista um item no storage, o botão "Continuar edição/cadastro de item deve ser exibido"', function () { return __awaiter(_this, void 0, void 0, function () {
        var product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    product = new Product_model_1.Product();
                    product.title = 'Produto teste';
                    storage.set(STORAGE_KEY, product);
                    component.ngOnInit();
                    return [4 /*yield*/, fixture.whenStable()];
                case 1:
                    _a.sent();
                    fixture.detectChanges();
                    expect(page.buttonContinueEditing.innerHTML).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Caso NÂO exista um item no storage, deve ir diretamente para etapa de cadastro de foto', function () { return __awaiter(_this, void 0, void 0, function () {
        var routerSpy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    routerSpy = spyOn(router, "navigateByUrl");
                    return [4 /*yield*/, storage.remove(STORAGE_KEY)];
                case 1:
                    _a.sent();
                    component.ngOnInit();
                    return [4 /*yield*/, fixture.whenStable()];
                case 2:
                    _a.sent();
                    expect(routerSpy).toHaveBeenCalledWith('/user-account/product/step-cad/photo');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Ao clicar em "Continuar cadastro/edição" deve ir para etapa de envio de fotos sem remover o item do storage', function () { return __awaiter(_this, void 0, void 0, function () {
        var product, routerSpy, productInCadStep;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    product = new Product_model_1.Product();
                    routerSpy = spyOn(router, "navigateByUrl");
                    product.title = 'Produto teste';
                    storage.set(STORAGE_KEY, product);
                    component.ngOnInit();
                    return [4 /*yield*/, fixture.whenStable()];
                case 1:
                    _a.sent();
                    fixture.detectChanges();
                    page.buttonContinueEditing.click();
                    return [4 /*yield*/, fixture.whenStable()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, storage.get(STORAGE_KEY)];
                case 3:
                    productInCadStep = _a.sent();
                    expect(productInCadStep).toBeDefined();
                    expect(routerSpy).toHaveBeenCalledWith('/user-account/product/step-cad/photo');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Ao clicar em "Novo item" deve ir para próxima etapa de cadastro', function () { return __awaiter(_this, void 0, void 0, function () {
        var product, routerSpy, productInCadStep;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    product = new Product_model_1.Product();
                    routerSpy = spyOn(router, "navigateByUrl");
                    product.title = 'Produto teste';
                    storage.set(STORAGE_KEY, product);
                    component.ngOnInit();
                    return [4 /*yield*/, fixture.whenStable()];
                case 1:
                    _a.sent();
                    fixture.detectChanges();
                    page.buttonCreateNew.click();
                    return [4 /*yield*/, fixture.whenStable()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, storage.get(STORAGE_KEY)];
                case 3:
                    productInCadStep = _a.sent();
                    expect(routerSpy).toHaveBeenCalledWith('/user-account/product/step-cad/photo');
                    return [2 /*return*/];
            }
        });
    }); });
    it('As opções não devem ser exibidas caso "loading==true"', function () { return __awaiter(_this, void 0, void 0, function () {
        var product, routerSpy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    product = new Product_model_1.Product();
                    routerSpy = spyOn(router, "navigateByUrl");
                    product.title = 'Produto teste';
                    storage.set(STORAGE_KEY, product);
                    component.ngOnInit();
                    expect(page.options).toBeNull();
                    return [4 /*yield*/, fixture.whenStable()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    var StartTestPage = /** @class */ (function () {
        function StartTestPage(fixture) {
        }
        Object.defineProperty(StartTestPage.prototype, "options", {
            get: function () { return this.query(".start-options"); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(StartTestPage.prototype, "buttonContinueEditing", {
            get: function () { return this.query(".button-continue-editing"); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(StartTestPage.prototype, "buttonCreateNew", {
            get: function () { return this.query(".button-create-new"); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(StartTestPage.prototype, "productTitle", {
            get: function () { return this.query(".product-title"); },
            enumerable: true,
            configurable: true
        });
        ;
        StartTestPage.prototype.query = function (selector) {
            return fixture.debugElement.nativeElement.querySelector(selector);
        };
        StartTestPage.prototype.queryAll = function (selector) {
            return fixture.debugElement.nativeElement.querySelectorAll(selector);
        };
        return StartTestPage;
    }());
});
//# sourceMappingURL=start.page.spec.js.map