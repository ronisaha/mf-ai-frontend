import { TestBed } from '@angular/core/testing';

import { ModelConsumerService } from './model-consumer.service';

describe('ModelConsumerService', () => {
  let service: ModelConsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelConsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
