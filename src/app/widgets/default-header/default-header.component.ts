import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent implements OnInit {

  @Input() link;
  constructor(private modalController: ModalController, public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
