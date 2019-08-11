import { TestBed } from '@angular/core/testing';

import { NearEarthObjectsResponseAdapter } from './near-earth-objects-response.adapter';

describe('NearEarthObjectsResponseAdapter', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NearEarthObjectsResponseAdapter = TestBed.get(NearEarthObjectsResponseAdapter);
    expect(service).toBeTruthy();
  });
});
