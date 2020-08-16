import { TestBed } from '@angular/core/testing';

import { LoanDataProviderService } from './loan-data-provider.service';

describe('LoanDataProviderService', () => {
  let service: LoanDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
