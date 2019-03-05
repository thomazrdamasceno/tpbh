
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailPage } from './product-detail.page';
import { mockProviders } from '../../shared/ionic-fake/mock.providers';
import { mockImports } from '../../shared/ionic-fake/mock.imports';
import { DataStubService } from '../../shared/data-stub/data-stub.service';
import { ProductsService } from '../shared/products.service';
import { ActivatedRouteStub } from '../../shared/route-stub/activated-route-stub';
import {  AlertController } from '@ionic/angular';

import { ActivatedRoute, Router } from '@angular/router';
import { TestPage } from '../../shared/test-page/test-page';
import { Storage } from '@ionic/storage';

describe('ProductDetailPage', () => {
  let component: ProductDetailPage;
  let fixture: ComponentFixture<ProductDetailPage>;
  let itemMock;
  let dataStubService: DataStubService;
  let testPage: ProductDetailTestPage;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: mockImports.concat([

      ]),
      providers: mockProviders.concat([

      ]),
      declarations: [ProductDetailPage],



      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents().then(() => {

        fixture = TestBed.createComponent(ProductDetailPage);
        component = fixture.componentInstance;
        dataStubService = fixture.debugElement.injector.get(DataStubService);

        testPage = new ProductDetailTestPage(fixture);
      });
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('A mensagem "producto não encontrado deve ser exibida quando o item no for encontrado no banco de dados" ', async() => {
      component.ngOnInit();
      await fixture.whenStable();
      delete component.item;
      fixture.detectChanges();
      expect(testPage.productNotFound).not.toBeNull();
  });

  



});


class ProductDetailTestPage extends TestPage<ProductDetailPage> {

  get productNotFound() { return this.query<HTMLElement>('.product-not-found');}
  get productTitle() { return this.query<HTMLElement>('.product-title');}
  get buttonChangeQuantity() { return this.query<HTMLElement>('.button-change-quantity');}
  get changeQuantityAlert () {return this.query<HTMLElement>('.product-change-quantity-alert');}
}


