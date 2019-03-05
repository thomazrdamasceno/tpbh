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

        const promise = new Promise((resolve) => {
          setTimeout(() => {
            const items  = this.dataStubService.getArray('products');
            resolve(items);
          }, 300);


        });

        return promise;
    }

}
