import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ModalController, IonSelect, LoadingController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { IonicSelectableComponent } from 'ionic-selectable';
import { componentFactoryName } from '@angular/compiler';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {



  searchOptions:any = {};
  brands = [];
  loading = false;
  models = [];
  yearsFrom = [];
  yearsTo = [];
  pricesFrom = [];
  pricesTo = [];
  searchForm: FormGroup;
  constructor(private changeRef: ChangeDetectorRef,private loadingController: LoadingController, private changeDetector: ChangeDetectorRef,private formBuilder: FormBuilder, private router: Router, private storage: Storage, private af: AngularFirestore) { 

    this.searchForm = this.formBuilder.group({
      brand: [''],
      model: ['']
    });
  }

  toDetail(id){
    id = id.replace("tc", "");
    id = id.replace("TC", "");
    this.router.navigateByUrl(`/products/detail/${id}`);
  }

  clearSearch() {
    this.searchOptions = {};
     this.storage.set('searchOptions', {});
  }
  async search() {
        
    let loading = await this.loadingController.create();
    await loading.present();
        this.storage.set('searchOptions', this.searchOptions).then(() => {
         
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['products/list']).then(()=>{
            loading.dismiss();
          });
        });
  }

  ngOnInit() {

   
    
    // Busca salva no localStorage
    this.storage.get('searchOptions').then((options) => {
       this.searchOptions = options || this.getDefaultSearchOptions();

       if(this.searchOptions.brand){
         this.brandChange({value: this.searchOptions.brand});
       }

    });

    // Preços e anos
    this.yearsFrom = this.getYearsOptions(1930);
    this.yearsTo = this.getYearsOptions(1930);
    this.pricesFrom = this.getPricesOptions(5000);
    this.pricesTo = this.getPricesOptions(5000);

    // Marcas
    this.loading = true;
    this.af.collection('brands', ref => ref.orderBy('order', 'asc')).valueChanges().subscribe((data) => {
      this.loading = false;
      this.brands  = data;
    });

  }

  changeYearsFrom(value) {
    this.yearsTo = this.getYearsOptions(value);
    this.changeDetector.detectChanges();
  }

  changePricesFrom(event) {

    console.log(event);
    const value = event.target.value;
    console.log('value aqui: ');
    console.log(value);

      this.pricesTo = this.getPricesOptions(value);
      this.changeDetector.detectChanges();

    // this.changeDetector.detectChanges();
    console.log('pricesTo aqui: ');
    console.log(this.pricesTo);

  }

  getYearsOptions(ini) {

    const years = [];
    let year = ini;
    for (year; year <= 2019; year += 1) {
           years.unshift(year);
    }

    return years;
  }

  getPricesOptions(ini) {

    const prices = [];

    let price = ini;
    while (price <= 500000) {
      prices.push(price);
      price += 5000;

    }


    return prices;
  }

  // Alteração da marca
  brandChange(event) {
    const brand = event.value;

    this.loading = true;
    this.models = [];
    delete this.searchOptions.model;
    this.af.collection(`brands/${brand.id}/models`, ref => ref.orderBy("label", "asc")).valueChanges().subscribe((data) => {

      this.models  = data;
      this.loading = false;
    });
  }

  getDefaultSearchOptions(){

    return  {
      private: true,
      resale: true
    }
  }

}
