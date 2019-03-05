import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nps',
  templateUrl: './nps.component.html',
  styleUrls: ['./nps.component.scss']
})
export class NpsComponent implements OnInit {

  itens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedItem: number;
  constructor() { }

  selectItem(item) {
       this.selectedItem = item;
  }
  ngOnInit() {
  }

}
