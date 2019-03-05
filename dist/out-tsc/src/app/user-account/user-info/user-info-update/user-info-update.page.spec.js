"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var user_info_update_page_1 = require("./user-info-update.page");
var mock_imports_1 = require("../../../shared/ionic-fake/mock.imports");
var mock_providers_1 = require("../../../shared/ionic-fake/mock.providers");
describe('UserInfoUpdatePage', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: mock_imports_1.mockImports.concat([]),
            providers: mock_providers_1.mockProviders.concat([]),
            declarations: [user_info_update_page_1.UserInfoUpdatePage],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(user_info_update_page_1.UserInfoUpdatePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-info-update.page.spec.js.map