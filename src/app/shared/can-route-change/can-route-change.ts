import { Injectable }           from '@angular/core';
import { Observable }           from 'rxjs';
import { CanDeactivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }  from '@angular/router';
import { AppComponent } from '../../app.component';
import { ModalController } from '@ionic/angular';
import { ProductDetailPage } from '../../products/product-detail/product-detail.page';


@Injectable()
export class CanDeactivateGuard implements CanDeactivate<ProductDetailPage> {


  constructor(private modalController: ModalController){

  }

  canDeactivate(
    component: ProductDetailPage,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

   

    

      let observable = new Observable<boolean>((resolve)=>{

        this.modalController.getTop().then((modal)=>{
          if(modal)
          {
            this.modalController.dismiss();
            resolve.next(false);

          }
          else{
            resolve.next(true);
          }
        }).catch(()=>{
          resolve.next(true);
        });
      });

      return observable;

     
   
    
  }
}