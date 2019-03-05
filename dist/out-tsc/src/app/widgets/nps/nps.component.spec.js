"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var nps_component_1 = require("./nps.component");
var mock_imports_1 = require("../../shared/ionic-fake/mock.imports");
var mock_providers_1 = require("../../shared/ionic-fake/mock.providers");
describe('NpsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: mock_imports_1.mockImports.concat([]),
            providers: mock_providers_1.mockProviders.concat([]),
            declarations: [nps_component_1.NpsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(nps_component_1.NpsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=nps.component.spec.js.map