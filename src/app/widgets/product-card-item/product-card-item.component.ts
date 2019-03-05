import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-product-card-item',
  templateUrl: './product-card-item.component.html',
  styleUrls: ['./product-card-item.component.scss']
})
export class ProductCardItemComponent implements OnInit {

  @Input('item') product: any;


  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  toDetail(item: any) {


    // const browser = this.appBrowser.open(item.externalLink||'http://www.google.com');

    // this.router.navigateByUrl(`/products/detail/${item.id}`);

  }


async showAccessories(product) {



  const alert = await this.alertController.create({
    header: product.title,
    subHeader: product.accessories,
    buttons: [
      {text: 'OK', role: 'cancel'}
    ]
  });
  alert.present();

}

}
