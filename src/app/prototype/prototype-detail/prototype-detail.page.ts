import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WidgetsModule } from '../../widgets/widgets.module';
import { PrototypeService } from '../prototype.service';
import { ActivatedRoute } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';

declare const Sass: any;


@Component({
  selector: 'app-prototype-detail',
  templateUrl: './prototype-detail.page.html',
  styleUrls: ['./prototype-detail.page.scss'],
})
export class PrototypeDetailPage implements OnInit {

  css = '';
  compileContent = '';
  selectedVersion: any = {};
  prototype: any = {};
  globalCss: any = {data: ''};
  versions = [];
  selectedIndexTab = 0;
  data = '<ion-button (click)=\'context.alert()\'>It is working</ion-button>';
  imports  = [CommonModule, FormsModule, IonicModule, WidgetsModule, IonicModule.forRoot()];
  selectedIndexTabChange(event) {
   this.selectedIndexTab = event;
   this.compileContent = this.serevice.getCompileContent(this.selectedVersion);
  }


  alert() {
      alert('ok');
  }

  error(error) {
    console.log('Erro ao compilar');
    console.log(error);
  }

  constructor(
    private af: AngularFirestore,
    @Inject(DOCUMENT) private document: Document,
    private element: ElementRef, private serevice: PrototypeService, private actRouter: ActivatedRoute ) { }


 saveGlobalCss(globalCss) {
   this.serevice.saveGlobalCss(globalCss);
 }

  ngOnInit() {





  this.serevice.getGlobalCss().subscribe((globalCss: any) => {

    if (globalCss) {
    this.globalCss = globalCss;
    this.serevice.globalCssCompile(this.document, this.globalCss);

    }
  });




   this.actRouter.paramMap.subscribe((data) => {

    const idPrototype = data.get('id');

    if (idPrototype != '0') {

        // Recupera o prototipo
       this.serevice.getById(idPrototype).subscribe(data => {

        this.prototype = data;
        // Recupera todas as versões do protótipo
        this.serevice.getVersionsByPrototype(idPrototype).subscribe((data) => {
           this.versions = data;

           if (! this.versions ||  this.versions.length == 0) {
            this.versions = [{label: '1.0'}];

           }
           this.selectedVersion = this.versions[0];
            this.selectedIndexTabChange(0);
        });
       });
    } else {
      this.prototype = {
        title: 'Unamed',
      };
      this.versions = [{label: '1.0'}];
      this.selectedVersion = this.versions[0];
      this.selectedIndexTabChange(0);
    }
   });

  }

  saveAsNewVersion(prototype, version) {

    this.serevice.saveToRemoteView(version);
    const newVersion = Object.assign({}, version);
    delete newVersion.id;
    this.save(prototype, newVersion);

  }

  saveToRemoteView(version) {
    this.serevice.saveToRemoteView(version);
  }
  save(prototype, version) {

       this.serevice.saveToRemoteView(version);

      // Salva o protótipo
      this.serevice.savePrototype(prototype).then(() => {

        console.log('Id do prototypo salvo: ');
        console.log(prototype.id);
      });
      // Salva a versão
      this.serevice.saveVersion(prototype.id, version).then(() => {


      });
  }
}
