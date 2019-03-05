import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-favorite-toggle',
  templateUrl: './favorite-toggle.component.html',
  styleUrls: ['./favorite-toggle.component.scss']
})
export class FavoriteToggleComponent implements OnInit {


  @Input() item: any;
  @Input() idProperty: string;

  value = false;
  loading = true;
  constructor(private storage: Storage) { }

  ngOnInit() {

    console.log('chamou o onInit() dos favoritos');

    this.storage.get('favorites').then((favorites) => {
        if (favorites) {


          const index = favorites.map((data) => {
            return data[this.idProperty]  || data.id;
        }).indexOf(this.item[this.idProperty] || this.item.id);

        if (index != -1) {
          this.value = true;
        }

        } else {

          this.storage.set('favorites', []);
        }
        this.loading = false;
    });
  }

   toggle(event) {

    event.stopPropagation();

    this.storage.get('favorites').then((favorites) => {

      const index = favorites.map((data) => {
        return data[this.idProperty] || data.id;
    }).indexOf(this.item[this.idProperty] || this.item.id);

    // O item já está no vetor, então tem que retirar
    if (index != -1) {
       favorites.splice(index, 1);
       this.value = false;
    } else {
         favorites.unshift(this.item);
         this.value = true;
    }


    this.storage.set('favorites', favorites);

    });




  }

}
