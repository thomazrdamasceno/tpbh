"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var next_step_button_component_1 = require("./next-step-button.component");
var mock_imports_1 = require("../../shared/ionic-fake/mock.imports");
var mock_providers_1 = require("../../shared/ionic-fake/mock.providers");
describe('NextStepButtonComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: mock_imports_1.mockImports.concat([]),
            providers: mock_providers_1.mockProviders.concat([]),
            declarations: [next_step_button_component_1.NextStepButtonComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(next_step_button_component_1.NextStepButtonComponent);
        component = fixture.componentInstance;
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=next-step-button.component.spec.js.map