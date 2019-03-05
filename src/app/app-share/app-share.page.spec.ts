import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSharePage } from './app-share.page';
import { mockImports } from '../shared/ionic-fake/mock.imports';
import { mockProviders } from '../shared/ionic-fake/mock.providers';

describe('AppSharePage', () => {
  let component: AppSharePage;
  let fixture: ComponentFixture<AppSharePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: mockImports.concat([

      ]),
      providers: mockProviders.concat([

      ]),
      declarations: [ AppSharePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSharePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
