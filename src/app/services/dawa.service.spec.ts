import { TestBed } from '@angular/core/testing';

import { DawaService } from './dawa.service';

describe('DawaService', () => {
  let service: DawaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DawaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
