import { Component, OnInit, Inject } from '@angular/core';
import { PrototypeService } from '../prototype.service';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WidgetsModule } from '../../widgets/widgets.module';

@Component({
  selector: 'app-prototype-remote-view',
  templateUrl: './prototype-remote-view.page.html',
  styleUrls: ['./prototype-remote-view.page.scss'],
})
export class PrototypeRemoteViewPage implements OnInit {


  compileContent = '';
  imports  = [CommonModule, FormsModule, IonicModule, WidgetsModule, IonicModule.forRoot({mode: 'ios'})];

  constructor( @Inject(DOCUMENT) private document: Document, private service: PrototypeService) { }

  ngOnInit() {


    this.service.getGlobalCss().subscribe((globalCss: any) => {

      if (globalCss) {

        this.service.globalCssCompile(this.document, globalCss);

        }

    });


    this.service.getRemoteView().subscribe((version: any) => {


      this.compileContent = this.service.getCompileContent(version);
    });






  }

}
