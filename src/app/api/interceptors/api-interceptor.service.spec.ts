import { TestBed } from '@angular/core/testing';

import { ApiInterceptor } from './api-interceptor.service';

describe('ApiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiInterceptor
    ]
  }));

  it('should be created', () => {
    const service: ApiInterceptor = TestBed.get(ApiInterceptor);
    expect(service).toBeTruthy();
  });
});
