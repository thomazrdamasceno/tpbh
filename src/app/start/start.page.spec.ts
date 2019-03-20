
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPage } from './start.page';
import { mockImports } from '../shared/ionic-fake/mock.imports';
import { mockProviders } from '../shared/ionic-fake/mock.providers';
import { StorageStub } from '../shared/storage-stub/storage-stub';
import { AlgoliaServiceStub } from '../shared/algolia-service/algolia.service.stub';
import { RouterTestingModule } from '@angular/router/testing';
import { routerMock } from '../shared/route-stub/router-mock';
import { LoadingControllerMock } from '../shared/ionic-fake/angular';
import { AlgoliaService } from '../shared/algolia-service/algolia.service';
import { Router } from '@angular/router';
import { LoadingController, IonSelect, IonCheckbox } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TestPage } from '../shared/test-page/test-page';
import { SearchPage } from '../search/search.page';

describe('StartPage', () => {
  let component: StartPage;
  let fixture: ComponentFixture<StartPage>;
  let page: StartTestPage;
  let storageStub: StorageStub= new StorageStub();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: mockImports.concat([

      ]),
      providers: [
        
        {provide:Storage, useValue: storageStub},
        {provide: AlgoliaService, useClass: AlgoliaServiceStub},
        {provide: Router, useValue: routerMock},
        {provide: LoadingController, useValue: LoadingControllerMock.instance()}
      ],
      declarations: [ StartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents().then(()=>{

      fixture = TestBed.createComponent(StartPage);
      component = fixture.componentInstance;
      page = new StartTestPage(fixture); 
      fixture.detectChanges();

    });
  }));

 
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("A mensagem de boas vindas deve ser exibida caso config.showStartPage!=true", async ()=>{

    await storageStub.remove("config.showStartPage");
    await component.ngOnInit();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(component.showPage).toBeTruthy();
    expect(page.welcomeMessage.innerText.toLowerCase()).toBe(" Seja Bem vindo ao TopCarsBH!".toLowerCase());
  });


  /*
  it("Os destaques devem ser exibidos na página", async ()=>{

    await storageStub.remove("config.showStartPage");
    await component.ngOnInit();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(page.destaques.length).toBeGreaterThan(0);
  });

  */

  
});

class StartTestPage extends TestPage<StartPage> {

  get destaques() { return this.queryAll<HTMLElement>('.destaque');}
  get welcomeMessage() { return this.query<HTMLElement>('.welcome-message');}
 
}


