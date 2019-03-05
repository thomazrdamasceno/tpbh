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
var message_routing_module_1 = require("./message-routing.module");
var message_list_module_1 = require("./message-list/message-list.module");
var message_detail_module_1 = require("./message-detail/message-detail.module");
var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                message_routing_module_1.MessageRoutingModule,
                message_list_module_1.MessageListPageModule,
                message_detail_module_1.MessageDetailPageModule
            ],
            declarations: []
        })
    ], MessageModule);
    return MessageModule;
}());
exports.MessageModule = MessageModule;
//# sourceMappingURL=message.module.js.map