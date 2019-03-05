"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var category_page_1 = require("./category.page");
var mock_imports_1 = require("../../../../shared/ionic-fake/mock.imports");
var mock_providers_1 = require("../../../../shared/ionic-fake/mock.providers");
var ionic_selectable_1 = require("ionic-selectable");
describe('CategoryPage', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: mock_imports_1.mockImports.concat([
                ionic_selectable_1.IonicSelectableModule
            ]),
            providers: mock_providers_1.mockProviders.concat([]),
            declarations: [category_page_1.CategoryPage],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents().then(function () {
            fixture = testing_1.TestBed.createComponent(category_page_1.CategoryPage);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
    }));
    beforeEach(function () {
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=category.page.spec.js.map