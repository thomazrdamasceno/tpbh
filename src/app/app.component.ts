import { Component, AfterViewInit } from '@angular/core';
import { Platform, IonicModule, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';
import { ActivatedRoute, Router, NavigationEnd, Event, NavigationStart } from '@angular/router';
import { AuthService } from './shared/auth-service/auth-service.service';
import { CommonModule, PlatformLocation } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WidgetsModule } from './widgets/widgets.module';
import { PrototypeService } from './prototype/prototype.service';
import { RoutingStateService } from './shared/routing-state/routing-state.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { GoogleAnalyticsService } from './shared/analytics/analytics.service';
import { AppSharePage } from './app-share/app-share.page';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  showShareOptions = false;
  initComponent = false;
   shareUrl = "https://www.topcarsbh.com.br";
   shareOptions = {
    displayNames: true,
    config: [{
          facebook: {
            socialShareUrl: this.shareUrl
          }
        },{
          twitter: {
            socialShareUrl: this.shareUrl
          },
          whatsapp: {
            socialShareUrl: this.shareUrl
          },
          
    }]
};


  compileContent = '';


  constructor(
    private analyticsService: GoogleAnalyticsService,
    private authService: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private modalController: ModalController,
    private routingState: RoutingStateService

  ) {
    this.initializeApp();

     
  }


  toDetail(element: { value: any; }) {

     let cod = element.value;
     cod = cod.replace('TC', '');
     cod = cod.replace('tc', '');
     this.router.navigateByUrl('/products/detail/' + cod);
  }

  logOut() {
    this.authService.logoutUser().then(() => {
        this.router.navigateByUrl('/login');
    });
  }

  async shareOptionsToggle(){

    let modal = await this.modalController.create({
      component: AppSharePage,
      componentProps: {
        title: 'Compartilhar este APP'
      }
    });
    modal.present();
    
   
    this.analyticsService.trackEvent("share-app",{
      category: 'recommendation'
    });

    
    
    
  }


  async initializeApp() {

    
   

    // Inicializa o histórico de navegação
    this.routingState.loadRouting();

    if (!firebase.apps.length) {
          firebase.initializeApp(environment.firebaseConfig);
    }
    this.platform.ready().then(async () => {
      
      //Verifica se há atualização no ionic pro
      //await this.checkUpdates();

    this.analyticsService.startTrackerWithId(environment.googleAnalytics.code);
    
    this.router.events.subscribe(event=> {

        
      if (event instanceof NavigationEnd) {
        
        let url:string = event.url;
        if(url.indexOf("/products/detail/")!=-1){
           url = "/products/detail/";
        }
        this.analyticsService.trackView(url);
       
      }
    })

      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
    });
  }
}
