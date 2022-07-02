import { TestBed } from '@angular/core/testing';

import { PromotionADSService } from './promotion-ads.service';

describe('PromotionADSService', () => {
  let service: PromotionADSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotionADSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
