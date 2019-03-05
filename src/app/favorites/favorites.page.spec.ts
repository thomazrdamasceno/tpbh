/*
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesPage } from './favorites.page';
import { mockImports } from '../shared/ionic-fake/mock.imports';
import { mockProviders } from '../shared/ionic-fake/mock.providers';
import { TestPage } from '../shared/test-page/test-page';
import { Storage } from '@ionic/storage';
import { DataStubService } from '../shared/data-stub/data-stub.service';

describe('FavoritesPage', () => {
  let component: FavoritesPage;
  let fixture: ComponentFixture<FavoritesPage>;
  let storage: Storage;
  let dataStubService: DataStubService;
  let page: FavoritesTestPage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: mockImports.concat([

      ]),
      providers: mockProviders.concat([

      ]),
      declarations: [ FavoritesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(FavoritesPage);
      component = fixture.componentInstance;
      storage = fixture.debugElement.injector.get(Storage);
      dataStubService = fixture.debugElement.injector.get(DataStubService);
      page = new FavoritesTestPage(fixture);
    });
  }));



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Os itens devem ser exibidos na lista corretamenta', async() => {

    const products = dataStubService.getArray('products');
    await storage.set('favorites', products);
    component.ionViewWillEnter();
    await fixture.whenStable();
    fixture.detectChanges();
    console.log('Itens aqui: ');
    console.log(page.itens);
    const firstItemContent = page.itens[0].innerHTML;
    expect(firstItemContent).toContain(products[0].title);

 });

  it('Ao clicar no botão "Limpar Tudo" todos os itens devem ser retirados da lista de favoritos ', async() => {

     const products = dataStubService.getArray('products');
     await storage.set('favorites', products);
     component.ionViewWillEnter();
     await fixture.whenStable();
     page.buttonClearAll.click();
     await fixture.whenStable();
     fixture.detectChanges();
     //expect(page.itens.length).toBe(0, 'A lista de itens deve estar vazia');

  });


});

class FavoritesTestPage extends TestPage<FavoritesPage> {

    get itens() {return this.queryAll<HTMLElement>('.favorites-item'); }
    get buttonClearAll() {return this.query<HTMLElement>('.button-clear-all'); }

}

*/
