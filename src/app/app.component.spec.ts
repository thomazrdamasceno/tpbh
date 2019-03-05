import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AuthService } from './shared/auth-service/auth-service.service';
import { ProductsService } from './products/shared/products.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreMock } from './shared/firebase-mock/firestore-mock/firestore-mock.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { routerMock } from './shared/route-stub/router-mock';
import { RoutingStateService } from './shared/routing-state/routing-state.service';
import { mockImports } from './shared/ionic-fake/mock.imports';
import { mockProviders } from './shared/ionic-fake/mock.providers';
import { GoogleAnalyticsService } from './shared/analytics/analytics.service';
import { GoogleAnalyticsServiceMock } from './shared/analytics/analytics.service.mock';

describe('AppComponent', () => {

  let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy, angularFireAuthSpy,  routingStateServiceStub;

  beforeEach(async(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    routingStateServiceStub = jasmine.createSpyObj('RoutingStateService', ['loadRouting']);
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });
    angularFireAuthSpy = jasmine.createSpyObj('AngularFireAuth', ['auth']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],

      imports: mockImports.concat([

      ]),
      providers: mockProviders.concat([

        { provide: StatusBar, useValue: statusBarSpy },
        {provide:GoogleAnalyticsService, useClass: GoogleAnalyticsServiceMock},

        {provide:  RoutingStateService, useValue:  routingStateServiceStub},
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformSpy },
         {provide: AngularFireAuth, useValue: angularFireAuthSpy},
         {provide: AngularFirestore, useClass: FirestoreMock},
         { provide: Router, useValue: routerMock },

      ]),
     
    }).compileComponents();
  }));

  /*

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
  });

  */

  // TODO: add more tests!

});
