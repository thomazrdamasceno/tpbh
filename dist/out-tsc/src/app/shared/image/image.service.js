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
var platform_browser_1 = require("@angular/platform-browser");
var core_2 = require("@capacitor/core");
var rxjs_1 = require("rxjs");
var Camera = core_2.Plugins.Camera;
var ImageService = /** @class */ (function () {
    function ImageService(sanitizer) {
        this.sanitizer = sanitizer;
        /**
         * @name _READER
         * @type object
         * @private
         * @description              Creates a FileReader API object
         */
        this._READER = new FileReader();
    }
    /* ----------------------------------------------------------------
 
       Mobile environment specific methods - used for iOS/Android only
 
       ---------------------------------------------------------------- */
    /**
     * @public
     * @method takePicture
     * @description    			Uses the getPhoto method of the Capacitor Camera plugin
     *							API to return a file Uri which is then made available
     *							to the parent script as a resolved (or rejected) Promise
     * 							object courtesy of the async/await functions
     *
     * @return {Promise}
     */
    ImageService.prototype.takePicture = function () {
        return __awaiter(this, void 0, void 0, function () {
            var image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Camera.getPhoto({
                            quality: 90,
                            allowEditing: true,
                            resultType: core_2.CameraResultType.Uri,
                            source: core_2.CameraSource.Camera
                        })];
                    case 1:
                        image = _a.sent();
                        /* We need to run the returned Image URL through Angular's DomSanitizer to 'trust'
                           this for use within the application (I.e. so that Angular knows this isn't an
                           XSS attempt or similarly malicious code) */
                        this._IMAGE = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.webPath));
                        return [2 /*return*/, this._IMAGE];
                }
            });
        });
    };
    /**
     * @public
     * @method selectPhoto
     * @description    			Uses the getPhoto method of the Capacitor Camera plugin
     *							API to return a file Uri from the Photolibrary selected
     *							image which is then made available to the parent script
     *							as a resolved (or rejected) Promise object courtesy of the
     *							async/await functions
     *
     * @return {Promise}
     */
    ImageService.prototype.selectPhoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Camera.getPhoto({
                            quality: 90,
                            allowEditing: false,
                            resultType: core_2.CameraResultType.Uri
                        })];
                    case 1:
                        image = _a.sent();
                        // We return the webPath property of the image object (which contains the image path)
                        return [2 /*return*/, image.webPath];
                }
            });
        });
    };
    /* ----------------------------------------------------------------
 
       Web environment specific methods - used for Progressive Web Apps
 
       ---------------------------------------------------------------- */
    /**
     * @public
     * @method selectImage
     * @param event  {any}     	The DOM event that we are capturing from the File input field
     * @description    			Uses the FileReader API to capture the input field event,
     *							retrieve the selected image and return that as a base64 data
     *							URL courtesy of an Observable
     * @return {Observable}
     */
    ImageService.prototype.selectImage = function (event) {
        var _this = this;
        return rxjs_1.Observable.create(function (observer) {
            _this.handleImageSelection(event)
                .subscribe(function (res) {
                observer.next(res);
                observer.complete();
            });
        });
    };
    /**
     * @public
     * @method handleImageSelection
     * @param event  {any}     	The DOM event that we are capturing from the File input field
     * @description    			Uses the FileReader API to capture the input field event,
     *							retrieve the selected image and return that as a base64 data
     *							URL courtesy of an Observable
     * @return {Observable}
     */
    ImageService.prototype.handleImageSelection = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this._READER.readAsDataURL(file);
        return rxjs_1.Observable.create(function (observer) {
            _this._READER.onloadend = function () {
                observer.next(_this._READER.result);
                observer.complete();
            };
        });
    };
    ImageService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map