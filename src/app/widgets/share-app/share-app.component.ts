import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GoogleAnalyticsService } from '../../shared/analytics/analytics.service';

@Component({
  selector: 'app-share-app',
  templateUrl: './share-app.component.html',
  styleUrls: ['./share-app.component.scss']
})
export class ShareAppComponent implements OnInit {

  @Input("messageToShare")  messageToShare:string;
 

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
   
    let link = share.link+this.messageToShare;
    window.open(link,"_system");
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    this.messageToShare = this.messageToShare ||   "https://www.topcarsbh.com.br";
  }

}
