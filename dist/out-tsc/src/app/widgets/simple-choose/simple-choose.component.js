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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SimpleChooseComponent = /** @class */ (function () {
    function SimpleChooseComponent() {
        this.onChange = function () { };
        this.onTouched = function () { };
        this.selectedOption = '';
    }
    SimpleChooseComponent_1 = SimpleChooseComponent;
    SimpleChooseComponent.prototype.ngOnInit = function () {
    };
    SimpleChooseComponent.prototype.selectOption = function (item) {
        this.selectedOption = item.value;
        this.onChange(item.value);
        this.onTouched(item.value);
    };
    //From ControlValueAccessor interface
    SimpleChooseComponent.prototype.writeValue = function (value) {
        if (value !== this.selectedOption) {
            this.selectedOption = value;
        }
    };
    //From ControlValueAccessor interface
    SimpleChooseComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    //From ControlValueAccessor interface
    SimpleChooseComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    var SimpleChooseComponent_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], SimpleChooseComponent.prototype, "options", void 0);
    SimpleChooseComponent = SimpleChooseComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-simple-choose',
            templateUrl: './simple-choose.component.html',
            styleUrls: ['./simple-choose.component.scss'],
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return SimpleChooseComponent_1; }),
                    multi: true
                }]
        })
    ], SimpleChooseComponent);
    return SimpleChooseComponent;
}());
exports.SimpleChooseComponent = SimpleChooseComponent;
//# sourceMappingURL=simple-choose.component.js.map