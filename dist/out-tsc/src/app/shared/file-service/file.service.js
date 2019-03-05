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
var auth_service_service_1 = require("../auth-service/auth-service.service");
var storage_1 = require("@angular/fire/storage");
var FileService = /** @class */ (function () {
    function FileService(authService, fireStorage) {
        this.authService = authService;
        this.fireStorage = fireStorage;
    }
    FileService.prototype.upload = function (file, metadata) {
        var filePath = this.getFilePath(file.name);
        var fileRef = this.fireStorage.ref(filePath);
        var uploadTask = fileRef.put(file);
        return uploadTask;
    };
    FileService.prototype.getFilePath = function (file) {
        if (!file || file == null) {
            return null;
        }
        var currentUser = this.authService.getCurrentUser();
        var path = "files/" + currentUser.uid + "/" + this.getUniqId() + "-" + file.name;
        return path;
    };
    FileService.prototype.getUniqId = function () {
        return new Date().getTime() + "";
    };
    FileService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [auth_service_service_1.AuthService, storage_1.AngularFireStorage])
    ], FileService);
    return FileService;
}());
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map