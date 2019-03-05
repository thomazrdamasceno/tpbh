"use strict";
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var message_detail_page_1 = require("./message-detail.page");
var mock_imports_1 = require("../../../shared/ionic-fake/mock.imports");
var mock_providers_1 = require("../../../shared/ionic-fake/mock.providers");
var router_1 = require("@angular/router");
var data_stub_service_1 = require("../../../shared/data-stub/data-stub.service");
var message_service_1 = require("../message-service/message.service");
var selectors = {
    MESSAGE_USER_NAME: 'message-user-name',
    MESSAGE_CONTENT: 'message-content'
};
describe('MessageDetailPage', function () {
    var component;
    var fixture;
    var activatedRouteStub;
    var page;
    var dataStubService;
    var messageService;
    var groupId;
    var messages;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: mock_imports_1.mockImports.concat([]),
            providers: mock_providers_1.mockProviders.concat([]),
            declarations: [message_detail_page_1.MessageDetailPage],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents().then(function () {
            fixture = testing_1.TestBed.createComponent(message_detail_page_1.MessageDetailPage);
            component = fixture.componentInstance;
            page = new MessageDetailTestPage(fixture);
            //Injections
            messageService = fixture.debugElement.injector.get(message_service_1.MessageService);
            activatedRouteStub = fixture.debugElement.injector.get(router_1.ActivatedRoute);
            dataStubService = fixture.debugElement.injector.get(data_stub_service_1.DataStubService);
        });
    }));
    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            groupId = '1';
            messages = dataStubService.getArray("messagesGroup/" + groupId + "/messages");
            activatedRouteStub.testParamMap = { groupId: groupId };
            return [2 /*return*/];
        });
    }); });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    /*
    
    it('O conteúdo da mensagem deve ser exibido corretamente', async () => {
  
      
      let userId = messages[0].userId;
      let user: User = dataStubService.get(`users/${userId}`);
      
      component.ngOnInit();
      await fixture.whenStable();
  
      fixture.detectChanges();
     
      let messageInPage =  page.messages[0];
      let content = messageInPage.querySelector(".message-content").innerHTML;
      let userImg = messageInPage.querySelector(".message-user-img").getAttribute('src');
      let userName = messageInPage.querySelector(".message-user-name").innerHTML;
  
      expect(page.pageTitle.innerHTML).toBe(user.name, 'page title');
      expect(userName).toBe(user.name, 'user name');
      expect(userImg).toBe(user.profileImg, 'user img');
      expect(content.trim()).toBe(messages[0].message.trim(), 'message content');
    });
  
    */
});
var MessageDetailTestPage = /** @class */ (function () {
    function MessageDetailTestPage(fixture) {
        this.fixture = fixture;
    }
    Object.defineProperty(MessageDetailTestPage.prototype, "messages", {
        get: function () { return this.queryAll(".message-list-item"); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MessageDetailTestPage.prototype, "pageTitle", {
        get: function () { return this.query("ion-title"); },
        enumerable: true,
        configurable: true
    });
    ;
    MessageDetailTestPage.prototype.query = function (selector) {
        return this.fixture.debugElement.nativeElement.querySelector(selector);
    };
    MessageDetailTestPage.prototype.queryAll = function (selector) {
        return this.fixture.debugElement.nativeElement.querySelectorAll(selector);
    };
    return MessageDetailTestPage;
}());
//# sourceMappingURL=message-detail.page.spec.js.map