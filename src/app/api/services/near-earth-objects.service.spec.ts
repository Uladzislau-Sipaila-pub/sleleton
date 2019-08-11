import { TestBed } from '@angular/core/testing';

import { NearEarthObjectsService } from './near-earth-objects.service';

describe('NearEarthObjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NearEarthObjectsService = TestBed.get(NearEarthObjectsService);
    expect(service).toBeTruthy();
  });
});
