import { TestBed } from '@angular/core/testing';

import { NearEarthObjectResponseAdapter } from './near-earth-object-response.adapter';

describe('NearEarthObjectResponseAdapter', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NearEarthObjectResponseAdapter = TestBed.get(NearEarthObjectResponseAdapter);
    expect(service).toBeTruthy();
  });
});
