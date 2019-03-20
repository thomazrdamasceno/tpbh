
import {Storage} from '@ionic/storage';
import { Camera } from '@ionic-native/camera/ngx';
import { routerMock } from '../route-stub/router-mock';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { FirestoreMock } from '../firebase-mock/firestore-mock/firestore-mock.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { FireAuthStub } from '../firebase-mock/fire-auth-stub/fire-auth-stub.service';
import { ProductsService } from '../../products/shared/products.service';
import { Provider } from '@angular/core';
import { ActivatedRouteStub } from '../route-stub/activated-route-stub';
import { DataStubService } from '../data-stub/data-stub.service';
import { NavController, AlertController, LoadingController, ActionSheetController, ToastController, Platform } from '@ionic/angular';
import { NavControllerMock } from './angular/nav-controller';
import { AlertControllerMock, LoadingControllerMock, ActionSheetControllerMock, ToastControllerMock, PlatformMock } from './angular';
import { StorageStub } from '../storage-stub/storage-stub';
import { ActivatedRoute, Router } from '@angular/router';
import { CameraMock } from './native/camera-mock/camera-mock';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { WebViewMock } from './native/webview-mock/webview-mock';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from '../user-service/user.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireStorageStub } from '../fire-storage-stub/fiire-storage-stub';
import { AlgoliaService } from '../algolia-service/algolia.service';
import { AlgoliaServiceStub } from '../algolia-service/algolia.service.stub';
import { AuthService } from '../auth-service/auth-service.service';
import { AuthServiceMock } from '../auth-service/auth-service.mock';
import { GoogleAnalyticsService } from '../analytics/analytics.service';
import { GoogleAnalyticsServiceMock } from '../analytics/analytics.service.mock';

export const mockProviders: Provider[] = [
     ProductsService,
     UserService,
     DataStubService,
     BrowserModule,
     {provide:GoogleAnalyticsService, useClass:  GoogleAnalyticsServiceMock},
     {provide: WebView, useClass: WebViewMock},
     { provide: Camera, useClass: CameraMock },
     {provide: Storage, useClass: StorageStub},
     {provide: ActionSheetController, useValue: new  ActionSheetControllerMock()},
     {provide:  AuthService, useClass:  AuthServiceMock},
    {provide: ActivatedRoute, useValue: new ActivatedRouteStub() },
    {provide: Router, useValue:  routerMock},
    {provide: AlgoliaService, useClass:  AlgoliaServiceStub},
    {provide: NavController, useValue: NavControllerMock},
    {provide: AngularFireStorage, useClass: AngularFireStorageStub},
    {provide: AngularFirestore, useClass: FirestoreMock},
    {provide: AngularFireAuth, useClass: FireAuthStub},
    {provide: AlertController, useValue: new AlertControllerMock()},
    {provide: ToastController, useValue: new ToastControllerMock()},
    {provide: LoadingController, useValue: LoadingControllerMock.instance()},
    {provide: Platform, useValue: new PlatformMock()}
];
