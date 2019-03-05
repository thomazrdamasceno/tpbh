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
var product_list_page_1 = require("./product-list.page");
var mock_imports_1 = require("../../shared/ionic-fake/mock.imports");
var mock_providers_1 = require("../../shared/ionic-fake/mock.providers");
var products_service_1 = require("../shared/products.service");
var router_1 = require("@angular/router");
describe('ProductListPage', function () {
    var component;
    var fixture;
    var testPage;
    var productsService;
    var router;
    var activatedRouteStub;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: mock_imports_1.mockImports.concat([]),
            providers: mock_providers_1.mockProviders.concat([]),
            declarations: [product_list_page_1.ProductListPage],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents().then(function () {
            fixture = testing_1.TestBed.createComponent(product_list_page_1.ProductListPage);
            component = fixture.componentInstance;
            fixture.autoDetectChanges();
            testPage = new ProductListTestPage(fixture);
            //Injections
            productsService = fixture.debugElement.injector.get(products_service_1.ProductsService);
            router = fixture.debugElement.injector.get(router_1.Router);
            activatedRouteStub = fixture.debugElement.injector.get(router_1.ActivatedRoute);
        });
    }));
    function defaultInit() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        component.ngOnInit();
                        return [4 /*yield*/, fixture.whenStable()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('O spinner de carregamento deve ser exibido/escondido', function () { return __awaiter(_this, void 0, void 0, function () {
        var spinnerBefore, spinnerAfter;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    component.ngOnInit();
                    fixture.detectChanges();
                    spinnerBefore = testPage.loadingSpinner;
                    expect(spinnerBefore).toBeDefined('O Spinner deve ser exibido antes do carregamento');
                    return [4 /*yield*/, fixture.whenStable()];
                case 1:
                    _a.sent();
                    spinnerAfter = testPage.loadingSpinner;
                    expect(spinnerAfter).toBeNull('O spinner deve ser escondido após o carregamento');
                    return [2 /*return*/];
            }
        });
    }); });
    it('A lista de itens deve ser exibida na tela', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            defaultInit();
            expect(testPage.products.length).toBeGreaterThan(0, 'O tamanho da lista deve ser maior que 0');
            return [2 /*return*/];
        });
    }); });
    it('Ao clicar em um item, deve ir para o detalhamento de produto', function () { return __awaiter(_this, void 0, void 0, function () {
        var spy, product, productId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    defaultInit();
                    spy = spyOn(router, "navigateByUrl");
                    product = testPage.products[0];
                    productId = product.querySelector('.product-id').innerHTML;
                    product.click();
                    return [4 /*yield*/, fixture.whenStable()];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalledWith("/products/detail/" + productId);
                    return [2 /*return*/];
            }
        });
    }); });
    it('O titulo do produto deve ser definido', function () { return __awaiter(_this, void 0, void 0, function () {
        var product;
        return __generator(this, function (_a) {
            defaultInit();
            product = testPage.products[0];
            expect(product.querySelector(".product-title").innerHTML).toBeDefined();
            return [2 /*return*/];
        });
    }); });
    it('Caso seja informado o id da categoria na rota, a listagem de produtos deve ser de acordo com a cactegoria', function () { return __awaiter(_this, void 0, void 0, function () {
        var categoryId, productsServiceSpy;
        return __generator(this, function (_a) {
            categoryId = '1';
            activatedRouteStub.testParamMap = { categoryId: categoryId };
            productsServiceSpy = spyOn(productsService, 'getByKeyValue');
            defaultInit();
            expect(productsServiceSpy).toHaveBeenCalledWith('category.id', categoryId);
            return [2 /*return*/];
        });
    }); });
});
var ProductListTestPage = /** @class */ (function () {
    function ProductListTestPage(fixture) {
        this.fixture = fixture;
    }
    Object.defineProperty(ProductListTestPage.prototype, "products", {
        get: function () { return this.queryAll(".product-list-item"); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ProductListTestPage.prototype, "loadingSpinner", {
        get: function () { return this.query(".loading-spinner"); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ProductListTestPage.prototype, "buttonMenu", {
        get: function () { return this.query(".button-menu"); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ProductListTestPage.prototype, "inputSearchProduct", {
        get: function () { return this.query(".input-search-product"); },
        enumerable: true,
        configurable: true
    });
    ;
    ProductListTestPage.prototype.query = function (selector) {
        return this.fixture.debugElement.nativeElement.querySelector(selector);
    };
    ProductListTestPage.prototype.queryAll = function (selector) {
        return this.fixture.debugElement.nativeElement.querySelectorAll(selector);
    };
    return ProductListTestPage;
}());
//# sourceMappingURL=product-list.page.spec.js.map