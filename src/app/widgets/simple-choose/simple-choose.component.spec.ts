import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleChooseComponent } from './simple-choose.component';
import { mockImports } from '../../shared/ionic-fake/mock.imports';
import { mockProviders } from '../../shared/ionic-fake/mock.providers';

describe('SimpleChooseComponent', () => {
  let component: SimpleChooseComponent;
  let fixture: ComponentFixture<SimpleChooseComponent>;
  let page: SimpleChooseTestPage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: mockImports.concat([

      ]),
      providers: mockProviders.concat([

      ]),
      declarations: [SimpleChooseComponent]
    })
      .compileComponents().then(() => {

        fixture = TestBed.createComponent(SimpleChooseComponent);
        component = fixture.componentInstance;
        fixture.autoDetectChanges();
        page = new SimpleChooseTestPage(fixture);

      });
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('A lista de elementos deve ser exibida corretamente no template: ', async () => {

    const options = [{
      header: 'options 1',
      subHeader: 'sub header'
    },
    {
      header: 'options 2',
      subHeader: 'sub header'
    }
    ];
    component.options = options;
    component.ngOnInit();
    await fixture.detectChanges();


  });

});



class SimpleChooseTestPage {



  constructor(public fixture: ComponentFixture<SimpleChooseComponent>) {


  }


}

