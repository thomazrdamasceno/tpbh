import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPage } from './search.page';
import { mockImports } from '../shared/ionic-fake/mock.imports';
import { mockProviders } from '../shared/ionic-fake/mock.providers';
import { IonicSelectableModule } from 'ionic-selectable';
import { TestPage } from '../shared/test-page/test-page';
import { IonCheckbox, IonSelect } from '@ionic/angular';

describe('SearchPage', () => {
  let component: SearchPage;
  let fixture: ComponentFixture<SearchPage>;
  let page: SearchTestPage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: mockImports.concat([
        IonicSelectableModule
      ]),
      providers: mockProviders.concat([
      ]),
      declarations: [ SearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPage);
    component = fixture.componentInstance;
    page= new SearchTestPage(fixture);
   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('O selected de brands só deve ser exibido quando todas as marcas forem carregadas', async()=>{

     component.ngOnInit();
     fixture.detectChanges();
     expect(page.brand).toBeNull('o element não deve ser exibido antes de carregar todas as marcas');
     let brandsMocks = [{
       label: 'Fiat'
     }];
     component.brands = brandsMocks;
     fixture.detectChanges();
     expect(page.brand).not.toBeNull("O element deve ser exibido após o carregamento das marcas");

  })

  it('O select de modelo só dele ser exibido após selecionar uma marca e carregar todos os modelos referentes', async()=>{

    component.ngOnInit();
    component.searchOptions = {};
    fixture.detectChanges();
    expect(page.model).toBeNull('o element não deve ser exibido antes de selecionar uma marca');
    component.searchOptions = {
      brand: "fiat"
    };
    fixture.detectChanges();
    expect(page.model).toBeNull('o element não deve ser exibido antes de carregar todos os modelos');
    
    component.models = [{
      label: 'uno'
    }];
    fixture.detectChanges();
    
    expect(page.model).not.toBeNull("O element deve ser exibido após o carregamento dos modelos");

 })

 it("Particular e revenda devem ser selecionados por padrão", async()=>{
 

    component.ngOnInit();
    await fixture.whenStable();
    
    fixture.detectChanges();

    expect(page.resale.checked).toBeTruthy("resale deve ser true");
    expect(page.private.checked).toBeTruthy("private seve ser true");

 });

 it("A seleção de ano deve ter a opção 'Todos' ", async()=>{
 

  component.ngOnInit();
  await fixture.whenStable();

  component.searchOptions = {
    yearMin: "2010",
    yearMax: "2015"
  };

  await fixture.whenStable();
  fixture.detectChanges();
  
  
  expect(page.yearMin.value).toEqual("", "O valor de yearMin deve ser nulo por padrão");
  expect(page.yearMax.value).toEqual("", "O valor de yearMax deve ser nulo por padrão");

  

});
  

  
});


class SearchTestPage extends TestPage<SearchPage> {

  get yearMin() { return this.query<IonSelect>('.yearMin');}
  get yearMax() { return this.query<IonSelect>('.yearMax');}
  get resale() { return this.query<IonCheckbox>('.resale');}
  get private() { return this.query<IonCheckbox>('.private');}
  get brand() { return this.query<HTMLElement>('.brand');}
  get model() { return this.query<HTMLElement>('.model');}
}
