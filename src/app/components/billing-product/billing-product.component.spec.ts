import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingProductComponent } from './billing-product.component';

describe('BillingProductComponent', () => {
  let component: BillingProductComponent;
  let fixture: ComponentFixture<BillingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
