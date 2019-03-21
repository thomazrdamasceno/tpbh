import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppUtil {
   
  loadingElement: HTMLIonLoadingElement;
  constructor(private toastController: ToastController,
    private alertController: AlertController,
    private router: Router,
    private loadingCtrl: LoadingController
    ) { 
        
     
    }

  
    async changeRouter(url: string){
           
      let loading = await this.loadingCtrl.create();
      await loading.present();
      this.router.navigateByUrl(url).then(()=>{
        loading.dismiss();
      });
    }

  showMessage(message: string) {
   this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top'
    }).then((toast) => {
             toast.present();
    });

  }

  confirm(header?: string) {


    const promise = new Promise((resolve, reject) => {

      this.alertController.create({

        header: header || 'Tem certeza que deseja executar esta ação?',
        buttons: [
          {
            role: 'cancel',
            text: 'Cancelar',
            handler: () => {
              reject();
            }
          },
          {
            role: 'ok',
            text: 'OK',
            handler: () => {
              resolve();
            }
          },

        ]
       }).then((alert) => {
         alert.present();
       });

    });

    return promise;

  }

}
