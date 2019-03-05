"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var title_page_1 = require("./title.page");
var mock_imports_1 = require("../../../../shared/ionic-fake/mock.imports");
var mock_providers_1 = require("../../../../shared/ionic-fake/mock.providers");
var forms_1 = require("@angular/forms");
describe('TitlePage', function () {
    var component;
    var fixture;
    var page;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: mock_imports_1.mockImports.concat([
                forms_1.ReactiveFormsModule,
            ]),
            providers: mock_providers_1.mockProviders.concat([]),
            declarations: [title_page_1.TitlePage],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents().then(function () {
            fixture = testing_1.TestBed.createComponent(title_page_1.TitlePage);
            page = new TitleTestPage(fixture);
            component = fixture.componentInstance;
        });
    }));
    it('should be create', function () {
        expect(component).toBeTruthy();
    });
});
var TitleTestPage = /** @class */ (function () {
    function TitleTestPage(fixture) {
        this.fixture = fixture;
    }
    TitleTestPage.prototype.query = function (selector) {
        return this.fixture.debugElement.nativeElement.querySelector(selector);
    };
    TitleTestPage.prototype.queryAll = function (selector) {
        return this.fixture.debugElement.nativeElement.querySelectorAll(selector);
    };
    return TitleTestPage;
}());
//# sourceMappingURL=title.page.spec.js.map