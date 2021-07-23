import { TestBed } from '@angular/core/testing';

import { BillingProductService } from './billing-product.service';

describe('BillingProductService', () => {
  let service: BillingProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillingProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
