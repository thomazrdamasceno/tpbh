import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { PrototypeService } from '../prototype.service';
import { AppUtil } from '../../shared/app-util/app-util.service';

@Component({
  selector: 'app-prototype-list',
  templateUrl: './prototype-list.page.html',
  styleUrls: ['./prototype-list.page.scss'],
})
export class PrototypeListPage implements OnInit {

   prototypes = [];
  constructor(private service: PrototypeService, private appUtil: AppUtil) { }


  ngOnInit() {

    this.service.getAll().subscribe((data) => {
      this.prototypes = data;
      console.log('Protos: ');
      console.log(data);
    });
  }

  saveToView(item) {

     this.service.getVersionsByPrototype(item.id).subscribe((versions) => {
      this.service.saveToRemoteView(versions[0]);

     });


  }

  deleteItem(event, item) {
    event.stopPropagation();
    this.appUtil.confirm().then(() => {

      this.service.delete(item.id).then(() => {

        this.appUtil.showMessage('O item foi deletado com sucesso!');
        // this.products$ = this.productsService.getAll();
      });
    });

  }

}
