import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ProductsService } from '../shared/products.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as _ from 'lodash';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlgoliaService } from '../../shared/algolia-service/algolia.service';
import { DataStubService } from '../../shared/data-stub/data-stub.service';
import { ScrollHideConfig } from '../../widgets/scroll-hide/scroll-hide.directive';
import { IonInfiniteScroll, AlertController, LoadingController, Platform, ModalController, IonSelect, IonContent } from '@ionic/angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { DefaultHeaderComponent } from '../../widgets/default-header/default-header.component';
import { Storage } from '@ionic/storage';
import { RoutingStateService } from '../../shared/routing-state/routing-state.service';
import * as algoliasearch from 'algoliasearch';
import { AppUtil } from '../../shared/app-util/app-util.service';
import { GoogleAnalyticsService } from '../../shared/analytics/analytics.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  @ViewChild('orderSelect') orderSelect: IonSelect;

  @ViewChild('pageContent') pageContent: IonContent;


  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  loading = false;
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'top', maxValue: 72 };

  page = 0;
  totalResults;
  products = [];
  query = '';
  algoliaFilter = '';
  categoryId;
  subcategoryId;
  currentUrl;
  previousUrl;
  algoliaIndex = 'products'; // Indice do algolia utilizado na busca

  searchOptions: any = {};
  loadingElement: HTMLIonLoadingElement;

  constructor(
    private router: Router,
  
    private loadingCtrl: LoadingController,
    private appUtil: AppUtil,
    private storage: Storage,
    private gaService: GoogleAnalyticsService,
    private routingState: RoutingStateService,
    private algoliaService: AlgoliaService,
   ) {




  }

  changeAlgoliaIndex(algoliaIndex) {


    this.loading = true;
    this.page = 0;
    this.executeSearch().then((res) => {

      this.pageContent.scrollToTop();
      this.products = res.hits;
      this.totalResults = res.nbHits;
      this.loading = false;

    });
  }

  openOrderOptions() {
    this.orderSelect.open();
  }

  ionViewWillEnter() {

    if (this.routingState.getPreviousUrl() == '/search') {
      this.init();
    }
  }


  ngOnInit() {

    if (this.routingState.getPreviousUrl() != '/search') {
       this.init();
    }

  }

  init(event?) {
    
    this.page = 0;
    this.loading = true;

       this.storage.get('searchOptions').then((searchOptions) => {
         this.searchOptions = searchOptions || {};
         this.executeSearch().then((res) => {

          this.products = res.hits;
          this.totalResults = res.nbHits;
          this.loading = false;
          if (event) {
            event.target.complete();
          }
        });
       });
  }


  async getMore(event) {

    console.log('event: ');
    console.log(event);
    this.page++;

     this.executeSearch().then((res: any) => {

      this.products = this.products.concat(res.hits);
      event.target.complete();
    });

  }

  async executeSearch() {

   const index = this.algoliaIndex.length >= 0 ? this.algoliaIndex : undefined;
   let loading = await this.loadingCtrl.create();
   await loading.present();
   this.loading =true;
   let searchPromise = this.algoliaService.search(this.getAlgoliaOptions(), index);
   searchPromise.then((res)=>{
    
    if(res.nbHits==0){
      //this.analyticsService.trackEvent('no-results',{ category:'disappointment'});
    }
     this.loading =false; 
     loading.dismiss();
   }).catch(()=>{
    loading.dismiss();
   });
   return searchPromise;

  }


  getAlgoliaOptions() {
    const options = this.searchOptions;

    const algoliaOptions: algoliasearch.QueryParameters = {
      query: options.version || '',

      filters: this.getFilters(),
      page: this.page,
      attributesToRetrieve:["objectID","city","resaleType","privateType","title","price","imgs","km", "yearManufacture", "yearModel","color"],
      hitsPerPage: 30,

      distinct: false
    };

    return algoliaOptions;
  }

  getFilters(): any {

    const filters = [];
    const options = this.searchOptions;
    options.colors = options.colors || [];
    const colorsQuerys = [];
    const otherQuerys = [];

    //Dimensões
    if(options.brand)
    this.gaService.setDimension(1, options.brand);

    if(options.model)
    this.gaService.setDimension(2, options.model);


    // Particular e revenda
    let queryResaleAndPrivate = '';
    if (options.private == true) {
      queryResaleAndPrivate = 'privateType:true';
    }
     // Revenda
    if (options.resale == true) {
      if (queryResaleAndPrivate.length > 0) {
        queryResaleAndPrivate += ' OR ';
      }
      queryResaleAndPrivate += 'resaleType:true';
    }

    queryResaleAndPrivate = queryResaleAndPrivate.length > 0 ? ' ( ' + queryResaleAndPrivate + ' ) ' :  queryResaleAndPrivate;

    filters.push(queryResaleAndPrivate);

    // model
    if (options.model) {
      let model: string = options.model.label;
      model = model.toLowerCase();
      model = model.replace(' ', '-');
      filters.push(`model:${model}`);
    }

    if (options.brand) {
      let brand: string = options.brand.label;
      brand = brand.toLowerCase();
      brand = brand.replace(' ', '-');
      filters.push(`brand:${brand}`);
    }

    // Ano fabriação
    if (options.yearMin) {
      const queryYear = `yearManufacture >= ${options.yearMin}`;
      filters.push(queryYear);
    }

    // Ano modelo
    if (options.yearMax) {
      const queryYear = `yearModel <= ${options.yearMax}`;
      filters.push(queryYear);
    }

    // Preço mínimo
    if (options.priceMin) {
      const query = `price >= ${options.priceMin}`;
      filters.push(query);
    }

     // Preço máximo
     if (options.priceMax) {
      const query = `price <= ${options.priceMax}`;
      filters.push(query);
    }



    // Cores
    for (let i = 0; i < options.colors.length; i++) {

      const color = options.colors[i];
      let colorQuery = `color:${color}`;
      if ((i + 1) < options.colors.length) {
        colorQuery += ' OR ';
      }
      colorsQuerys.push(colorQuery);
    }


    for (let k = 0; k < filters.length; k++) {

      let query = filters[k];
      if (query.length == 0) {
          continue;
      }

      if ((k + 1) < filters.length) {
          query += ' AND ';
      }
      otherQuerys.push(query);
    }

    let queryString = otherQuerys.join(' ');
    const colorsQuerysString =  '(' + colorsQuerys.join(' ') + ')';
    if (colorsQuerys.length > 0) {
        queryString += ' AND ' + colorsQuerysString;
    }


     // Fitros fixos
     let fixFilters = ' approved:true';

     if (queryString.length > 0) {
       fixFilters = ' AND ' + fixFilters;
     }

      queryString = queryString + fixFilters;




    return queryString;


  }

  search(event) {
    this.loading = true;
    this.query = event.srcElement.value;
    this.page = 0;
    this.loadingElement.present();
    this.executeSearch().then((res: any) => {


      this.products = res.hits;
      this.loading = false;
      this.loadingElement.dismiss();
    });

  }



 async toDetail(item: any) {
     
    let loading =  await this.loadingCtrl.create();
     await loading.present();
    this.router.navigateByUrl('/veiculo/detalhe/' + item.objectID).then(()=>{
      loading.dismiss();
    });

}


}
