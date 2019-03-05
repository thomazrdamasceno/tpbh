"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var star_rating_component_1 = require("./star-rating/star-rating.component");
var nps_component_1 = require("./nps/nps.component");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var default_header_component_1 = require("./default-header/default-header.component");
var favorite_toggle_component_1 = require("./favorite-toggle/favorite-toggle.component");
var next_step_button_component_1 = require("./next-step-button/next-step-button.component");
var help_page_button_component_1 = require("./help-page-button/help-page-button.component");
var simple_choose_component_1 = require("./simple-choose/simple-choose.component");
var spinner_component_1 = require("./spinner/spinner.component");
var image_select_component_1 = require("./image-select/image-select.component");
var progress_bar_component_1 = require("./progress-bar/progress-bar.component");
var WidgetsModule = /** @class */ (function () {
    function WidgetsModule() {
    }
    WidgetsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                angular_1.IonicModule,
                forms_1.FormsModule
            ],
            declarations: [
                star_rating_component_1.StarRatingComponent,
                nps_component_1.NpsComponent,
                default_header_component_1.DefaultHeaderComponent,
                favorite_toggle_component_1.FavoriteToggleComponent,
                next_step_button_component_1.NextStepButtonComponent,
                help_page_button_component_1.HelpPageButtonComponent,
                simple_choose_component_1.SimpleChooseComponent,
                spinner_component_1.SpinnerComponent,
                image_select_component_1.ImageSelectComponent,
                progress_bar_component_1.ProgressBarComponent
            ],
            exports: [
                angular_1.IonicModule,
                common_1.CommonModule,
                star_rating_component_1.StarRatingComponent,
                nps_component_1.NpsComponent,
                default_header_component_1.DefaultHeaderComponent,
                favorite_toggle_component_1.FavoriteToggleComponent,
                next_step_button_component_1.NextStepButtonComponent,
                help_page_button_component_1.HelpPageButtonComponent,
                simple_choose_component_1.SimpleChooseComponent,
                spinner_component_1.SpinnerComponent,
                image_select_component_1.ImageSelectComponent,
                progress_bar_component_1.ProgressBarComponent
            ]
        })
    ], WidgetsModule);
    return WidgetsModule;
}());
exports.WidgetsModule = WidgetsModule;
//# sourceMappingURL=widgets.module.js.map