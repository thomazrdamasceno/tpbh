"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message_module_1 = require("./message.module");
describe('MessagesModule', function () {
    var messagesModule;
    beforeEach(function () {
        messagesModule = new message_module_1.MessageModule();
    });
    it('should create an instance', function () {
        expect(messagesModule).toBeTruthy();
    });
});
//# sourceMappingURL=message.module.spec.js.map