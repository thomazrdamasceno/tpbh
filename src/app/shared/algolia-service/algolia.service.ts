import { Injectable } from '@angular/core';
import * as algoliasearch from 'algoliasearch';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlgoliaService {

  algoliaClient: algoliasearch.Client;
  algoliaIndex: algoliasearch.Index;
  algoliaIndexSetting: algoliasearch.IndexSettings = {
    attributesForFaceting:[
      "approved","brand","model","color","privateType","resaleType", "ultraLowKM","yearManufacture", "yearModel", "price"
    ]
  };
  constructor() {


    console.log("env aqui: ");
    console.log(environment); 
    this.algoliaClient = algoliasearch(environment.algolia.appId, environment.algolia.apiKey);
    this.algoliaIndex = this.algoliaClient.initIndex('products');
    this.algoliaIndex.setSettings(this.algoliaIndexSetting);


  }

 



  clearCache() {
    this.algoliaClient.clearCache();
  }

  search(queryParams: algoliasearch.QueryParameters, index?: string) {

    if (index) {
      this.algoliaIndex = this.algoliaClient.initIndex(index);
      this.algoliaIndex.setSettings(this.algoliaIndexSetting);
    }

    console.log('parametros do algolia: ');
    console.log(queryParams);

    const promise = new Promise<any>((resolve, reject) => {

      this.algoliaIndex.search(queryParams, (err, res) => {

        if (err) {
          reject(err);
        } else if (res) {

          console.log('res aqui: ');
          console.log(res);
          resolve(res);

        }

      });
    });

    return promise;


  }
}
