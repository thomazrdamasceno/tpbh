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
var message_service_1 = require("../message-service/message.service");
var auth_service_service_1 = require("../../../shared/auth-service/auth-service.service");
var user_service_1 = require("../../../shared/user-service/user.service");
var MessageListPage = /** @class */ (function () {
    function MessageListPage(messageService, authService, userService) {
        this.messageService = messageService;
        this.authService = authService;
        this.userService = userService;
    }
    MessageListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authService.getCurrentUser();
        this.messageService.getMessageGroupsByUser(this.currentUser.uid).subscribe(function (data) {
            if (data) {
                _this.messageService.getLazyDataForMessagesGroups(data).then(function (transformed) {
                    _this.groups = transformed;
                });
            }
        });
    };
    MessageListPage = __decorate([
        core_1.Component({
            selector: 'app-message-list',
            templateUrl: './message-list.page.html',
            styleUrls: ['./message-list.page.scss'],
        }),
        __metadata("design:paramtypes", [message_service_1.MessageService,
            auth_service_service_1.AuthService,
            user_service_1.UserService])
    ], MessageListPage);
    return MessageListPage;
}());
exports.MessageListPage = MessageListPage;
//# sourceMappingURL=message-list.page.js.map