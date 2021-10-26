import { TestBed } from '@angular/core/testing';

import { PlogService } from './plog.service';

describe('PlogService', () => {
  let service: PlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
