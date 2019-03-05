import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlgoliaService } from '../shared/algolia-service/algolia.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  showPage = false; // Mostra ou não o conteúdo da página
  totalResults;
  constructor(private storage: Storage, private algoliaService: AlgoliaService, private router: Router, private loadingCtrl: LoadingController) { }

  async ngOnInit() {
    const load = await this.loadingCtrl.create();
    await load.present();
    this.storage.get('config.showStartPage').then((value) => {
        if (value == true) {
          load.dismiss();
          this.router.navigateByUrl('/search');
        } else {
            this.storage.set('config.showStartPage', true);
            this.algoliaService.search({}).then((res) => {
                      this.totalResults = res.nbHits;
                      load.dismiss();
                      this.showPage = true;

            });

        }


    });
  }
  async search() {
    const load = await this.loadingCtrl.create();
    await load.present();
    this.router.navigateByUrl('/search').then(()=>{
        load.dismiss();
    });
  }

}
