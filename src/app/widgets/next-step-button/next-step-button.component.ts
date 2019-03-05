import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NextStepService } from './next-step-service/next-step.service';

@Component({
  selector: 'app-next-step-button',
  templateUrl: './next-step-button.component.html',
  styleUrls: ['./next-step-button.component.scss']
})
export class NextStepButtonComponent implements OnInit {

 @Input() disabled = false;
 @Input() item: any;

 @Input() nextFn;

  routes = [

    {name: 'start', path: '/user-account/product/step-cad'},
    {name: 'photo', path: '/user-account/product/step-cad/photo'},
    {name: 'title', path: '/user-account/product/step-cad/title'},
    {name: 'description', path: '/user-account/product/step-cad/description'},
    {name: 'type-sale', path: '/user-account/product/step-cad/type-sale'},
    {name: 'category', path: '/user-account/product/step-cad/category'},
    {name: 'sub-category', path: '/user-account/product/step-cad/sub-category'},
    {name: 'state', path: '/user-account/product/step-cad/state'},
    {name: 'price', path: '/user-account/product/step-cad/price'},
    {name: 'others-infos', path: '/user-account/product/step-cad/other-infos'},
  ];


  nextRoute = '';
  currentRouter: {name: string, path: string};
  constructor(private router: Router, private storage: Storage, private nextStepService: NextStepService) { }


  ngOnInit() {

  }

  // Trasnforma [{}] em [""]


  next() {
      this.nextStepService.next(this.item);
  }

}

