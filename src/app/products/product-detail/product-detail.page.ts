
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ProductsService } from '../shared/products.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PhotoswipeOptions, PhotoswipeItem, HeilbaumPhotoswipeComponent } from '../../lazy-widgets/photoswipe';
import { Item } from 'photoswipe';
import { ToastController, ModalController, AlertController, IonSlides, LoadingController } from '@ionic/angular';
import { AlgoliaService } from '../../shared/algolia-service/algolia.service';
import { GoogleAnalyticsService } from '../../shared/analytics/analytics.service';
import { ShareAppComponent } from '../../widgets/share-app/share-app.component';
import { Meta, Title } from '@angular/platform-browser';

declare var FB: any;


const similarGroups = {
  "palio,uno,gol,ka,up": true,
  "onix,hb20,fox,sandero,fiesta": true,
  "focus,punto,golf,cruze-hatch,bravo":true
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  @ViewChild('slides') slides: IonSlides;

  @ViewChild('similarProductsSlides') similarProductsSlides: IonSlides;


  similarByCategory = [];

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
    private meta: Meta, private title: Title,
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
      componentProps: { items: photoswipeItems, options: options }

    });
    modal.present();


    // this.pswpCtrl.create(photoswipeItems, options).present();
    // pswp.present({ animate: false });

  }

  async share() {


    let modal = await this.modalController.create({
      component: ShareAppComponent,
      componentProps: {
        title: 'Compartilhar este APP',
        messageToShare: document.URL,
        item: this.item
      }
    });
    modal.present();



  }

  ngOnInit() {



    //Configuração do slide de similares


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

        this.item = res.hits[0] || { objectID: 0 };

        //Similares por categoria
        this.setSimilars(this.item);

        //tags referentes ao veículo
        this.setMetaTags(this.item);

        

        loading.dismiss();
      }).catch(() => {
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

    window.open(`https://api.whatsapp.com/send?phone=${number}`, "_system");

    // Registro do evento

    this.analyticsService.trackEvent('whatsapp-open', {
      category: 'activation'
    });



  }

  setSimilars(item:any){
     let arrayModels =  [];
     for(let key in similarGroups){
             if(key.indexOf(item.model)!=-1){
               arrayModels = key.split(",");
               
               break;
             }
     }

     console.log("array de modelos: ");
     console.log(arrayModels);
     if(arrayModels.length==0){
      return;
     }
     let querys = [];
     for(let model of arrayModels){
         
      querys.push(`model: ${model}`);
     }
     let queryString  = querys.join(" OR ");

     this.algoliaService.search({
       attributesToRetrieve: ["imgs", "title", "km", "price"],
       filters: `NOT objectID: ${item.objectID} AND `+ queryString
     }).then((res)=>{
        this.similarByCategory = res.hits;
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

  

  setMetaTags(item: any) {
    let title = `Topcars BH | ${item.title}`;

    this.meta.updateTag({ name: 'og:site_name', content: title, });
    this.meta.updateTag({ name: 'og:title', content: title, });
    this.meta.updateTag({ name: 'og:type', content: "website", });
    this.meta.updateTag({ name: 'og:url', content: document.URL });
    this.meta.updateTag({ name: 'og:updated_time', content: "1440432930" });
    this.meta.updateTag({ name: 'og:image', content: item.imgs[0], itemprop: "image" });
    this.meta.updateTag({ name: 'og:description', content: "Topcars BH, os melhores veículos de Belo Horizonte e região!" });
    this.title.setTitle(title);
  }

}
