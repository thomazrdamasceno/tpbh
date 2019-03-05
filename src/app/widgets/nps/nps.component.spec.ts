import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsComponent } from './nps.component';
import { mockImports } from '../../shared/ionic-fake/mock.imports';
import { mockProviders } from '../../shared/ionic-fake/mock.providers';

describe('NpsComponent', () => {
  let component: NpsComponent;
  let fixture: ComponentFixture<NpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: mockImports.concat([

      ]),
      providers: mockProviders.concat([

      ]),
      declarations: [ NpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
