import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEvaluationPage } from './app-evaluation.page';
import { mockImports } from '../shared/ionic-fake/mock.imports';
import { IonicSelectableModule } from 'ionic-selectable';
import { mockProviders } from '../shared/ionic-fake/mock.providers';

describe('AppEvaluationPage', () => {
  let component: AppEvaluationPage;
  let fixture: ComponentFixture<AppEvaluationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: mockImports.concat([
        
      ]),
      providers: mockProviders.concat([
      ]),
      declarations: [ AppEvaluationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEvaluationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
