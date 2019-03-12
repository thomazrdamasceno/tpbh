
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/forkJoin';
declare var ga: Function;

@Injectable()
export class GoogleAnalyticsService {
  constructor() {}
  startTrackerWithId(id) {
    ga('create', {
      storage: 'none',    ​
      trackingId: id,    ​
      clientId: localStorage.getItem('ga:clientId')
    });  
    var dimensionValue = 'DIMENSAO_TESTE';
    ga('set', 'dimension1', dimensionValue);  ​
    ga('set', 'checkProtocolTask', null);​
    ga('set', 'transportUrl', 'https://www.google-analytics.com/collect');
    ga(function(tracker) {
      if ( !localStorage.getItem('ga:clientId') ) {
        localStorage.setItem( 'ga:clientId', tracker.get('clientId') );
      }
    });
  }
  trackView(screenName) {
    console.log(screenName);
    ga('set', 'page', screenName);
    ga('send', 'pageview');
  }
  trackEvent(action:string, props:any) {
    ga('send', 'event', {
      eventCategory: props.category,
      eventLabel: props.label,
      eventAction: action,
      eventValue: props.value
    });
  }
}