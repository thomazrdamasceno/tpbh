
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ProductsService } from '../shared/products.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PhotoswipeOptions, PhotoswipeItem, HeilbaumPhotoswipeComponent } from '../../lazy-widgets/photoswipe';
import { Item } from 'photoswipe';
import { ToastController, ModalController, AlertController, IonSlides, LoadingController } from '@ionic/angular';
import { AlgoliaService } from '../../shared/algolia-service/algolia.service';
import { GoogleAnalyticsService } from '../../shared/analytics/analytics.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  @ViewChild('slides') slides: IonSlides;

  slideOpts = {

    pagination: {
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  }
  };



  item: any = {};
  imgSrc: '';
  videoUrl: SafeResourceUrl;
  quantity = 1;

  constructor(private toastCtrl: ToastController, private service: ProductsService, private alertController: AlertController,
     private actRoute: ActivatedRoute, private domSanitizer: DomSanitizer,
     private algoliaService: AlgoliaService,
     private analyticsService: GoogleAnalyticsService,
     private changeRef: ChangeDetectorRef,
     private loadingController: LoadingController,
     private modalController: ModalController
     ) { }


     nextSlide() {
      this.slides.slideNext();
    }

    prevSlide() {
      this.slides.slidePrev();
    }

    async pswpMultiThumbnail(index: number): Promise<void> {


     const photoswipeItems: Array<Item> = [];


  for (const img of this.item.imgs) {


    photoswipeItems.push({
      h: 900,
      src: img,
      w: 1200
    });
  }




      const options: PhotoswipeOptions = {
        index: index,
        history: false,
        shareEl: false,
        closeEl: true,

        clickToCloseNonZoomable: false,
        showHideOpacity: true
      };




     const modal = await this.modalController.create({
           component: HeilbaumPhotoswipeComponent,
           componentProps: {items: photoswipeItems, options: options}

      });
      modal.present();


      // this.pswpCtrl.create(photoswipeItems, options).present();
      // pswp.present({ animate: false });

    }
  ngOnInit() {



    this.actRoute.paramMap.subscribe(async data => {
      let id = data.get('id');
      //Correção do id

      id = id.replace("t", "");
      id = id.replace("T", "");
      id = id.replace("c", "");
      id = id.replace("C", "");

      let loading = await this.loadingController.create();
      await loading.present();
      this.algoliaService.search({
        filters: `objectID: ${id}`
      }).then((res) => {

          this.item = res.hits[0] || {objectID:0};
          loading.dismiss();
      }).catch(()=>{
        loading.dismiss();
      });

    });

  }

  openCall(tel: string) {

   

    window.open(`tel: ${tel}`);

     // Registro do evento

    
     this.analyticsService.trackEvent('call-open', {
      category: 'activation'
    });
    
  }

  sendWhatsapp() {

    

    let number = this.item.whatsappTel;
    number = number.replace('(', '');
    number = number.replace(')', '');
    number = number.replace('-', '');
    number = number.replace(' ', '');
    number = '55' + number;

    window.open(`https://api.whatsapp.com/send?phone=${number}`,"_system");

    // Registro do evento

    this.analyticsService.trackEvent('whatsapp-open', {
      category: 'activation'
    });

  

  }

  async changeQuantity() {
    const alert = await this.alertController.create({
      header: 'Quantidade',
      cssClass: 'product-change-quantity-alert',
      inputs: [

        {
          name: 'quantity',
          type: 'number',
          id: 'quantity',
          value: '1',
          min: 1,

          placeholder: 'Quantidade do produto'
        },

      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelar');
          }
        }, {
          text: 'Ok',

          handler: (data) => {
            if (!data.quantity || data.quantity < 1) {
              this.showErrorToast('Você deve inserir uma quantidade válida');
            } else {
              this.quantity = data.quantity;
              this.changeRef.detectChanges();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async showErrorToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

}
