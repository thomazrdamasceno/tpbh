"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = require("@ionic/storage");
var ngx_1 = require("@ionic-native/camera/ngx");
var router_mock_1 = require("../route-stub/router-mock");
var firestore_mock_service_1 = require("../firebase-mock/firestore-mock/firestore-mock.service");
var firestore_1 = require("@angular/fire/firestore");
var auth_1 = require("@angular/fire/auth");
var fire_auth_stub_service_1 = require("../firebase-mock/fire-auth-stub/fire-auth-stub.service");
var products_service_1 = require("../../products/shared/products.service");
var activated_route_stub_1 = require("../route-stub/activated-route-stub");
var data_stub_service_1 = require("../data-stub/data-stub.service");
var angular_1 = require("@ionic/angular");
var nav_controller_1 = require("./angular/nav-controller");
var angular_2 = require("./angular");
var message_service_1 = require("../../user-account/message/message-service/message.service");
var storage_stub_1 = require("../storage-stub/storage-stub");
var router_1 = require("@angular/router");
var camera_mock_1 = require("./native/camera-mock/camera-mock");
var ngx_2 = require("@ionic-native/ionic-webview/ngx");
var webview_mock_1 = require("./native/webview-mock/webview-mock");
var platform_browser_1 = require("@angular/platform-browser");
var user_service_1 = require("../user-service/user.service");
exports.mockProviders = [
    products_service_1.ProductsService,
    user_service_1.UserService,
    data_stub_service_1.DataStubService,
    message_service_1.MessageService,
    platform_browser_1.BrowserModule,
    { provide: ngx_2.WebView, useClass: webview_mock_1.WebViewMock },
    { provide: ngx_1.Camera, useClass: camera_mock_1.CameraMock },
    { provide: storage_1.Storage, useClass: storage_stub_1.StorageStub },
    { provide: angular_1.ActionSheetController, useValue: new angular_2.ActionSheetControllerMock() },
    { provide: router_1.ActivatedRoute, useValue: new activated_route_stub_1.ActivatedRouteStub() },
    { provide: router_1.Router, useValue: router_mock_1.routerMock },
    { provide: angular_1.NavController, useValue: nav_controller_1.NavControllerMock },
    { provide: firestore_1.AngularFirestore, useClass: firestore_mock_service_1.FirestoreMock },
    { provide: auth_1.AngularFireAuth, useClass: fire_auth_stub_service_1.FireAuthStub },
    { provide: angular_1.AlertController, useValue: new angular_2.AlertControllerMock() },
    { provide: angular_1.ToastController, useValue: new angular_2.ToastControllerMock() },
    { provide: angular_1.LoadingController, useValue: new angular_2.LoadingControllerMock() },
    { provide: angular_1.Platform, useValue: new angular_2.PlatformMock() }
];
//# sourceMappingURL=mock.providers.js.map