import { TestBed } from '@angular/core/testing';

import { ErrorAdapterService } from './error.adapter';

describe('ErrorAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorAdapterService = TestBed.get(ErrorAdapterService);
    expect(service).toBeTruthy();
  });
});
