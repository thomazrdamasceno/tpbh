"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var end_page_1 = require("./end.page");
var mock_imports_1 = require("../../../../shared/ionic-fake/mock.imports");
var mock_providers_1 = require("../../../../shared/ionic-fake/mock.providers");
describe('EndPage', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: mock_imports_1.mockImports.concat([]),
            providers: mock_providers_1.mockProviders.concat([]),
            declarations: [end_page_1.EndPage],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents().then(function () {
            fixture = testing_1.TestBed.createComponent(end_page_1.EndPage);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
    }));
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=end.page.spec.js.map