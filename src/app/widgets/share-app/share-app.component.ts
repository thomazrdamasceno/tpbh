import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GoogleAnalyticsService } from '../../shared/analytics/analytics.service';

@Component({
  selector: 'app-share-app',
  templateUrl: './share-app.component.html',
  styleUrls: ['./share-app.component.scss']
})
export class ShareAppComponent implements OnInit {

  messageToShare = "https://www.topcarsbh.com.br";

  shareOptions = [
    {title: "Facebook", icon: "logo-facebook", link: `https://www.facebook.com/sharer.php?u=${this.messageToShare}`},
    {title: "WhatsApp", icon: "logo-whatsapp", link:`https://api.whatsapp.com/send?text=${this.messageToShare}`},
    {title: "Tumblr", icon: "logo-tumblr", link: `http://www.tumblr.com/share/link?url=${this.messageToShare}`},
    {title: "Twitter", icon: "logo-twitter", link: `http://twitter.com/intent/tweet?text=${this.messageToShare}`}
  ];
  constructor(private analyticsService: GoogleAnalyticsService, private modalCtrl: ModalController) { }

  share(share){

    this.analyticsService.trackEvent(`share-app-${share.title}`,{
      category: 'recommendation'
    });
   
    window.open(share.link,"_system");
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
