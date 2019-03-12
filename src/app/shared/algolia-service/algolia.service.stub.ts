import * as algoliasearch from 'algoliasearch';
import { Injectable } from '@angular/core';
import { DataStubService } from '../data-stub/data-stub.service';
@Injectable({
    providedIn: 'root'
  })
export class AlgoliaServiceStub {

     constructor(private dataStubService: DataStubService ) {

     }
    search(queryParams: algoliasearch.QueryParameters) {

        let promise = new Promise((resolve) => {
          setTimeout(() => {

            let  items  = this.dataStubService.getArray('products');
           
            let data = {
              nbHits: items.length,
              hits: items
            }
            console.log("Itens recuperados no algoliaServiceStub ");
            console.log(data);
            resolve(data);
          }, 300);


        });

        return promise;
    }
    

}
