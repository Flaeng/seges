import { TestBed } from '@angular/core/testing';

import { GetKommuneResolver } from './get-kommune.resolver';

describe('GetKommuneResolver', () => {
  let resolver: GetKommuneResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetKommuneResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
