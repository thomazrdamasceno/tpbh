import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class NextStepService {

  routes = [

    {name: 'start', path: '/user-account/product/step-cad'},
    {name: 'photo', path: '/user-account/product/step-cad/photo'},
    {name: 'title', path: '/user-account/product/step-cad/title'},
    {name: 'description', path: '/user-account/product/step-cad/description'},
    {name: 'type-sale', path: '/user-account/product/step-cad/type-sale'},
    {name: 'category', path: '/user-account/product/step-cad/category'},
    {name: 'sub-category', path: '/user-account/product/step-cad/sub-category'},
    {name: 'state', path: '/user-account/product/step-cad/state'},
    {name: 'price', path: '/user-account/product/step-cad/price'},
    {name: 'others-infos', path: '/user-account/product/step-cad/other-infos'},
  ];
  constructor(private router: Router, private storage: Storage) { }

  // Trasnforma [{}] em [""]
  getIndexOfRoute(route) {
    return this.routes.map((r) => {
         return r.path;

    }).indexOf(route);
}

next(item: any) {

  const currentRouter = this.getCurrentRoute();
  const indexOfCurrent = this.getCurrentIndex();
  const nextIndex = indexOfCurrent + 1;
  const nextRoute =  this.getPathOfIndex(nextIndex);

    if (currentRouter.name === 'sub-category' && item.typeSale === 'service') {

      const newUrl = this.routes[this.getIndexOfRoute(nextRoute) + 1].path;
      this.router.navigateByUrl(newUrl);
    } else {
     this.storage.set('productInCadStep', item);
     this.router.navigateByUrl(nextRoute);
    }


}


getPathOfIndex(index) {
  return this.routes[index].path;
}

getCurrentRoute() {
  return this.routes[this.getIndexOfRoute(this.router.url)];
}

getCurrentIndex() {
 return  this.getIndexOfRoute(this.getCurrentRoute().path);
}

}
