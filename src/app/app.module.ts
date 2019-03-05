import {AngularFireStorageModule} from '@angular/fire/storage';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './shared/auth-service/auth-service.service';
import { WidgetsModule } from './widgets/widgets.module';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { ProductsService } from './products/shared/products.service';
import { UserService } from './shared/user-service/user.service';
import { AngularFireFunctionsModule, FunctionsRegionToken } from '@angular/fire/functions';
import { HeilbaumPhotoswipeModule } from './lazy-widgets/photoswipe';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GoogleAnalytics} from "@ionic-native/google-analytics/ngx";
// Import your required language in main.ts or at the root of your application
// see https://codemirror.net/mode/index.html
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import { GoogleAnalyticsService } from './shared/analytics/analytics.service';
import { AppSharePage } from './app-share/app-share.page';
import { AppSharePageModule } from './app-share/app-share.module';


@NgModule({

  entryComponents: [AppSharePage],
  imports: [
    BrowserModule,
    AppSharePageModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    WidgetsModule,
    AngularFireMessagingModule,
    HeilbaumPhotoswipeModule,
    IonicStorageModule.forRoot(),
   
  ],
  providers: [
    { provide: FunctionsRegionToken, useValue: 'us-central1' },
    StatusBar,
    //Camera,
    WebView,
    InAppBrowser,
    SplashScreen,
    GoogleAnalyticsService,
    AuthService,
    ProductsService,
    UserService,
    // {provide: AngularFireAuth, useClass: FireAuthStub},
    // {provide: AngularFirestore, useClass: FirestoreMock},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {


}
