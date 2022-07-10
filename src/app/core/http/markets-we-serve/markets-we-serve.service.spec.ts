import { TestBed } from '@angular/core/testing';

import { MarketsWeServeService } from './markets-we-serve.service';

describe('MarketsWeServeService', () => {
  let service: MarketsWeServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketsWeServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
