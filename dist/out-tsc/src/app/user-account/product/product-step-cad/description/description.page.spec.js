"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var description_page_1 = require("./description.page");
var mock_imports_1 = require("../../../../shared/ionic-fake/mock.imports");
var mock_providers_1 = require("../../../../shared/ionic-fake/mock.providers");
describe('DescriptionPage', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: mock_imports_1.mockImports.concat([]),
            providers: mock_providers_1.mockProviders.concat([]),
            declarations: [description_page_1.DescriptionPage],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(description_page_1.DescriptionPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=description.page.spec.js.map