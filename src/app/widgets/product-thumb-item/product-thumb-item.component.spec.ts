import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductThumbItemComponent } from './product-thumb-item.component';

describe('ProductThumbItemComponent', () => {
  let component: ProductThumbItemComponent;
  let fixture: ComponentFixture<ProductThumbItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductThumbItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductThumbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
