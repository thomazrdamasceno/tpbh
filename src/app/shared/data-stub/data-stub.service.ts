import { Injectable } from '@angular/core';
import { productData } from './product-data/product-data';
import { productCategoriesData } from './product-category-data/product-category-data';
import { userData } from './users-data/users-data';
import { messageGroupData } from './message-group-data/message-group-data';
import { ordersDataData } from './orders-data/orders-data';


export const enum SetOrUpdateMode { SET = 1, UPDATE = 2 }

@Injectable({
  providedIn: 'root'
})
export class DataStubService {

  // Root Data
  data = {
    products: productData,
    productCategories: productCategoriesData,
    users: userData,
    messagesGroup: messageGroupData,
    orders: ordersDataData
  };


  setOrUpdate(path: string, object: any, mode: SetOrUpdateMode) {


    // set: 'products/1'
    // update 'products'
    // Niveis
    const nvs = path.split('/');


    if (mode === SetOrUpdateMode.SET) {
      nvs.pop();
    }



    const id = object.id;
    const value = object;

    console.log('nvs: ');
    console.log(nvs);
    console.log('value: ');
    console.log(value);

    switch (nvs.length) {

      case 0:
        break;

      case 1:
        this.data[nvs[0]][id] = value;
        break;

      case 2:
        this.data[nvs[0]] = this.data[nvs[0]] || {};
        this.data[nvs[0]][nvs[1]][id] = value;
        break;

      case 3:
        this.data[nvs[0]][nvs[1]] = this.data[nvs[0]][nvs[1]] || {};
        this.data[nvs[0]][nvs[1]][nvs[2]][id] = value;
        break;

      case 4:
        this.data[nvs[0]][nvs[1]][nvs[2]] || this.data[nvs[0]][nvs[1]][nvs[2]] || {};
        this.data[nvs[0]][nvs[1]][nvs[2]][nvs[3]][id] = value;
        break;

      case 5:
        this.data[nvs[0]][nvs[1]][nvs[2]][nvs[3]] = this.data[nvs[0]][nvs[1]][nvs[2]][nvs[3]] || {};
        this.data[nvs[0]][nvs[1]][nvs[2]][nvs[3]][nvs[4]][id] = value;
        break;

    }

    console.log('Data: ');
    console.log(this.data);
    return value;

  }

  delete(path) {



    if (!path) {
      return undefined;
    }

    // Niveis
    const nvs = path.split('/');

    console.log('nvs: ');
    console.log(nvs);
    console.log('path: ');
    console.log(path);


    switch (nvs.length) {

      case 0: delete this.data;
        break;

      case 1:  delete this.data[nvs[0]];
        break;

      case 2:
        delete  this.data[nvs[0]][nvs[1]];
        break;

      case 3:

        delete this.data[nvs[0]][nvs[1]][nvs[2]];
        break;

      case 4:

        delete this.data[nvs[0]][nvs[1]][nvs[2]][nvs[3]];
        break;

      case 5:
        delete  this.data[nvs[0]][nvs[1]][nvs[2]][nvs[3]][nvs[4]];
        break;

    }

    console.log('delete()');
    console.log(this.data);

  }

  getArray(path: string): Array<any> {

       const items = this.get(path);

      // Transforma a collection em um
      const array = [];
      for (const key in items) {
        array.push(items[key]);
      }

      return array;
  }

  get(path) {

    let result;

    if (!path) {
      return undefined;
    }

    // Niveis
    const nvs = path.split('/');


    switch (nvs.length) {

      case 0: result = this.data;
        break;

      case 1: result = this.data[nvs[0]];
        break;

      case 2:
        result = this.data[nvs[0]] ? this.data[nvs[0]][nvs[1]] : undefined;
        break;

      case 3:

        result = this.data[nvs[0]] && this.data[nvs[0]][nvs[1]] ? this.data[nvs[0]][nvs[1]][nvs[2]] : undefined;
        break;

      case 4:

        result = this.data[nvs[0]] && this.data[nvs[0]][nvs[1]] && this.data[nvs[0]][nvs[1]][nvs[2]] ? this.data[nvs[0]][nvs[1]][nvs[2]][nvs[3]] : undefined;
        break;

      case 5:
        result = this.data[nvs[0]] && this.data[nvs[0]][nvs[1]] && this.data[nvs[0]][nvs[1]][nvs[2]] && this.data[nvs[0]][nvs[1]][nvs[2]][nvs[3]] ? this.data[nvs[0]][nvs[1]][nvs[2]][nvs[3]][nvs[4]] : undefined;
        break;

    }

    return result;

  }


  constructor() { }



}
