import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AppUtil } from '../shared/app-util/app-util.service';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
import { GoogleAnalyticsService } from '../shared/analytics/analytics.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  constructor(private storage: Storage, private router: Router, private appUtil: AppUtil) {


   }

  favorites = [];
  ngOnInit() {

  }

   toDetail(item) {
     this.router.navigateByUrl(`/products/detail/${item.objectID}`);
   }

   ionViewWillEnter() {

    this.storage.get('favorites').then((data) => {
      this.favorites = data || [];

    });

  }

  clearAll() {

    this.appUtil.confirm('Tem certeza que deseja remover todos os itens?').then(() => {
      this.favorites =  [];
      this.storage.set('favorites', []);

    });

   }
}
