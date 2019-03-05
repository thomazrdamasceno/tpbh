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
var router_1 = require("@angular/router");
var MessageDetailPage = /** @class */ (function () {
    function MessageDetailPage(messageService, activatedRouteStub) {
        this.messageService = messageService;
        this.activatedRouteStub = activatedRouteStub;
    }
    MessageDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouteStub.paramMap.subscribe(function (data) {
            var groupId = data.get('groupId');
            _this.messageService.getGroupById(groupId).valueChanges().subscribe(function (data) {
                var groups = [];
                groups.push(data);
                console.log("groups aqui: ");
                console.log(groups);
                _this.messageService.getLazyDataForMessagesGroups(groups).then(function (transformeds) {
                    _this.group = transformeds[0];
                });
            });
            _this.messageService.getMessagesByGroup(groupId).valueChanges().subscribe(function (data) {
                _this.messages = data;
            });
        });
    };
    MessageDetailPage = __decorate([
        core_1.Component({
            selector: 'app-message-detail',
            templateUrl: './message-detail.page.html',
            styleUrls: ['./message-detail.page.scss'],
        }),
        __metadata("design:paramtypes", [message_service_1.MessageService, router_1.ActivatedRoute])
    ], MessageDetailPage);
    return MessageDetailPage;
}());
exports.MessageDetailPage = MessageDetailPage;
//# sourceMappingURL=message-detail.page.js.map