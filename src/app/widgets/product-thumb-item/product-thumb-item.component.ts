import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-thumb-item',
  templateUrl: './product-thumb-item.component.html',
  styleUrls: ['./product-thumb-item.component.scss']
})
export class ProductThumbItemComponent implements OnInit {

  @Input("item") product:any;
  constructor() { }

  ngOnInit() {
  }

}
