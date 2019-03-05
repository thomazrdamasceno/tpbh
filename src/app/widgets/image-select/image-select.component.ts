import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController, NavController, AlertController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-image-select',
  templateUrl: './image-select.component.html',
  styleUrls: ['./image-select.component.scss']
})
export class ImageSelectComponent implements OnInit {

  @Input() images: Array<any>;
  @Output() imagesChange = new EventEmitter();

  private reader: any = new FileReader();

  maxImgs = 4;
  platformIs = '';
  ngOnInit() {

    this.images = this.images || [];

  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {


      const converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }



  constructor(public navCtrl: NavController,
    private fireStorage: AngularFireStorage,
    private camera: Camera, private webview: WebView,
    private actionSheetController: ActionSheetController, private toastController: ToastController,
    private plt: Platform,
    private ref: ChangeDetectorRef) {

    // Are we on mobile?
    if (this.plt.is('ios') || this.plt.is('android')) {
      this.platformIs = 'mobile';
    } else {
      this.platformIs = 'browser';
    }
  }


  setToDefaultImage(index: number) {
    const item = this.images[index];
    this.images.splice(index, 1);
    this.images.unshift(item);
    this.ref.detectChanges();
    this.imagesChange.emit(this.images);
  }

  removeImageSource(index: number) {
    this.images.splice(index, 1);
    this.imagesChange.emit(this.images);
  }

  async selectImageWithMobile() {


    const actionSheet = await this.actionSheetController.create({
      header: 'Selecione uma imagem',
      buttons: [{
        text: 'Carregar a partir dos meus arquivos',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Utilizar Câmera',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();

  }

  selectImageWithBrowser(event): void {

    const file: any = event.target.files[0];
    this.reader.readAsDataURL(file);
    this.reader.onloadend = () => {
      const res = this.reader.result;
      this.images.push(res);
      this.imagesChange.emit(this.images);
      this.ref.detectChanges();
    };

  }

  takePicture(sourceType: PictureSourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE


    };

    this.camera.getPicture(options).then(imageData => {

      const base64 = 'data:image/jpeg;base64,' + imageData;

      console.log('Image path aqui: ');

          console.log('encoded: ');
          console.log(base64);
          this.images.push(base64);
          this.imagesChange.emit(this.images);
          this.ref.detectChanges();


    });
  }






  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }




}
