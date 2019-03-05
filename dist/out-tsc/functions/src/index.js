"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions = require("firebase-functions");
var admin = require("firebase-admin");
admin.initializeApp();
exports.createProfile = functions.auth.user()
    .onCreate(function (userRecord, context) {
    // Do something after a new user account is created
});
//# sourceMappingURL=index.js.map