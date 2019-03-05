import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlgoliaService } from '../../shared/algolia-service/algolia.service';

class AlgoliaSearchOptions {
  query: string;
  filters: Array<string>;
  page: number;
  hitsPerPage: number;
}

@Injectable()
export class ProductsService {

  constructor(public afs: AngularFirestore, private algoliaService: AlgoliaService) {


  }


}
