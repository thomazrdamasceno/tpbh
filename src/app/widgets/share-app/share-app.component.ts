import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GoogleAnalyticsService } from '../../shared/analytics/analytics.service';

declare var FB: any;
@Component({
  selector: 'app-share-app',
  templateUrl: './share-app.component.html',
  styleUrls: ['./share-app.component.scss']
})
export class ShareAppComponent implements OnInit {

  @Input("messageToShare")  messageToShare:string;
  @Input("item")  item: any;
 

  shareOptions = [
    {title: "Facebook", icon: "logo-facebook", link: `https://www.facebook.com/sharer.php?u=`},
    {title: "WhatsApp", icon: "logo-whatsapp", link:`https://api.whatsapp.com/send?text=`},
    {title: "Tumblr", icon: "logo-tumblr", link: `http://www.tumblr.com/share/link?url=`},
    {title: "Twitter", icon: "logo-twitter", link: `http://twitter.com/intent/tweet?text=`}
  ];
  constructor(private analyticsService: GoogleAnalyticsService, private modalCtrl: ModalController) { }

  share(share){



    this.analyticsService.trackEvent(`share-app-${share.title}`,{
      category: 'recommendation'
    });

    if(share.title=='Facebook'){

       
      let shareInf = {
        title: `TopcarsBH | ${this.item.title}`,
        image: this.item.imgs[0],
        url: `https://topcarsbh.com.br/products/detail/${this.item.objectID}`
      };
      console.log("Informações de compartilhamento: ");
      console.log(shareInf);
      FB.ui({
        method: 'share_open_graph',
        action_type: 'og.shares',
        href: shareInf.url,
        redirect_uri: document.URL,
        display: "touch",
        //mobile_iframe: true,
        action_properties: JSON.stringify({
          object: {

            'og:title': shareInf.title,
            'og:description': 'Os melhores veículos de Belo Horizonte e região!',
            'og:image': shareInf.image
          }
        })
      }, function(response) {
        console.log(response);
      });
    }

    else{
      let link = share.link+this.messageToShare;
      window.open(link,"_system");
    }
   
    
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    this.messageToShare = this.messageToShare ||   "https://www.topcarsbh.com.br";
  }

}
