/*
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as algoliasearch from 'algoliasearch';
import { ProductListPage } from './product-list.page';
import { mockImports } from '../../shared/ionic-fake/mock.imports';
import { mockProviders } from '../../shared/ionic-fake/mock.providers';
import { TestPage } from '../../shared/test-page/test-page';
import { ProductsService } from '../shared/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../../shared/route-stub/activated-route-stub';
import { DataStubService } from '../../shared/data-stub/data-stub.service';
import { AlgoliaService } from '../../shared/algolia-service/algolia.service';
// algoliasearch.Client

describe('ProductListPage', () => {
  let component: ProductListPage;
  let fixture: ComponentFixture<ProductListPage>;
  let testPage: ProductListTestPage;
  let router: Router;
  let dataStubService: DataStubService;
  let productsService: ProductsService;
  let activatedRouteStub: ActivatedRouteStub;



  // let


  beforeEach(async(() => {



    TestBed.configureTestingModule({
      imports: mockImports.concat([

      ]),
      providers: mockProviders.concat([

      ]),
      declarations: [ ProductListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents().then(() => {

      fixture = TestBed.createComponent(ProductListPage);
      component = fixture.componentInstance;
      fixture.autoDetectChanges();
      testPage = new ProductListTestPage(fixture);




    });
  }));

  beforeEach(async() => {
    // Injections
    dataStubService = fixture.debugElement.injector.get(DataStubService);
    productsService = fixture.debugElement.injector.get(ProductsService);
    router =  fixture.debugElement.injector.get(Router);
    activatedRouteStub = fixture.debugElement.injector.get(ActivatedRoute) as any;



  });

  function algoliaSearchFunction(params) {

    const promise = new Promise((resolve, reject) => {

      setTimeout(() => {

        const products =   dataStubService.getArray('products');
        console.log('products do search: ');
        console.log(products);
        resolve(products);

      }, jasmine.DEFAULT_TIMEOUT_INTERVAL);

    });

    return promise;

  }



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('A lista de itens deve ser exibida corretamente na tela', async () => {


    component.ngOnInit();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(testPage.products.length).toBeGreaterThan(0, 'O tamanho da lista deve ser maior que 0');
 });




  it('Ao clicar em um item, deve ir para o detalhamento de produto', async () => {
    const spy  = spyOn(router, 'navigateByUrl');
    component.ngOnInit();
    await fixture.whenStable();
    fixture.detectChanges();
    const product = testPage.products[0];
    const productId = product.querySelector('.product-id').innerHTML;
    product.click();
    await fixture.whenStable();

    expect(spy).toHaveBeenCalledWith(`/products/detail/${productId}`);
});

/*


it('O titulo do produto deve ser definido', async () => {
  defaultInit();
  const product = testPage.products[0];
  expect(product.querySelector('.product-title').innerHTML).toBeDefined();
});

it('Caso seja informado o id da categoria na rota, a listagem de produtos deve ser de acordo com a cactegoria', async () => {

  const categoryId = '1';
  activatedRouteStub.testParamMap = {categoryId: categoryId};
  const productsServiceSpy = spyOn(productsService, 'getByKeyValue');
  defaultInit();
  expect(productsServiceSpy).toHaveBeenCalledWith('category.id', categoryId);
});



});

class ProductListTestPage extends TestPage<ProductListPage> {

  get products() {return this.queryAll<HTMLElement>('.product-list-item'); }
  get loadingSpinner()  {return this.query<HTMLElement>('.loading-spinner'); }
  get buttonMenu() {return this.query<HTMLElement>('.button-menu'); }
  get inputSearchProduct() {return this.query<HTMLElement>('.input-search-product'); }


}

*/
