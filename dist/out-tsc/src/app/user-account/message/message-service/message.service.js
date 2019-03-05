"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var generic_service_1 = require("../../../shared/generic-service/generic.service");
var firestore_1 = require("@angular/fire/firestore");
var auth_service_service_1 = require("../../../shared/auth-service/auth-service.service");
var user_service_1 = require("../../../shared/user-service/user.service");
var MessageService = /** @class */ (function (_super) {
    __extends(MessageService, _super);
    function MessageService(afs, authService, userService) {
        var _this = _super.call(this, 'messagesGroup') || this;
        _this.afs = afs;
        _this.authService = authService;
        _this.userService = userService;
        return _this;
    }
    MessageService.prototype.getGroupById = function (groupId) {
        return this.afs.doc("messagesGroup/" + groupId);
    };
    MessageService.prototype.getLastMessageByGroup = function (groupId) {
        return this.afs.collection("messagesGroup/" + groupId + "/messages", function (ref) { return ref.orderBy('date', 'desc').limit(1); });
    };
    MessageService.prototype.getMessagesByGroup = function (groupId) {
        return this.afs.collection("messagesGroup/" + groupId + "/messages");
    };
    MessageService.prototype.getMessageGroupsByUser = function (userId) {
        return this.afs.collection('messagesGroup', function (ref) { return ref.where('users', 'array-contains', userId); }).valueChanges();
    };
    //Recupera dados lazy de grupos de mensagens
    MessageService.prototype.getLazyDataForMessagesGroups = function (groups) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, _i, groups_1, item, lastMessages, users, indexToRemove, idUserTo, userTo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentUser = this.authService.getCurrentUser();
                        _i = 0, groups_1 = groups;
                        _a.label = 1;
                    case 1:
                        if (!(_i < groups_1.length)) return [3 /*break*/, 5];
                        item = groups_1[_i];
                        return [4 /*yield*/, this.getLastMessageByGroup(item.id).valueChanges().toPromise()];
                    case 2:
                        lastMessages = _a.sent();
                        item.lastMessageContent = lastMessages[0].message;
                        item.lastMessageDate = lastMessages[0].date;
                        users = item.users;
                        indexToRemove = users.indexOf(currentUser.uid);
                        users.splice(indexToRemove, 1);
                        idUserTo = users[0];
                        return [4 /*yield*/, this.userService.getById(idUserTo).toPromise()];
                    case 3:
                        userTo = _a.sent();
                        item.userTo = userTo;
                        item.lastMessageLabelTo = userTo.name;
                        item.img = userTo.profileImg;
                        if (lastMessages[0].userId === idUserTo) {
                            item.lastMessageLabelFrom = "";
                        }
                        else {
                            item.lastMessageLabelFrom = "Eu: ";
                        }
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/, groups];
                }
            });
        });
    };
    MessageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [firestore_1.AngularFirestore, auth_service_service_1.AuthService, user_service_1.UserService])
    ], MessageService);
    return MessageService;
}(generic_service_1.GenericService));
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map