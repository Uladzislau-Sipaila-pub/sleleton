import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NearEarthObjectResponseAdapter } from '@api/adapters/near-earth-object-response.adapter';
import { NearEarthObjectsResponseAdapter } from '@api/adapters/near-earth-objects-response.adapter';
import { NearEarthObject } from '@shared/models/near-earth-object';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NearEarthObjectsService extends ApiService {
  constructor(
    protected http: HttpClient,
    private nearEarthObjectResponseAdapter: NearEarthObjectResponseAdapter,
    private nearEarthObjectsResponseAdapter: NearEarthObjectsResponseAdapter
  ) {
    super(http);
  }

  getNearEarthObjects(): Observable<NearEarthObject[]> {
    return super.get(`v1/feed/today`)
      .pipe(
        map(response => this.nearEarthObjectsResponseAdapter.adapt(response))
      );
  }

  getNearEarthObject(id: string): Observable<NearEarthObject> {
    const parameters = new HttpParams();

    return super.get(`v1/neo/${id}`)
      .pipe(
        map(response => this.nearEarthObjectResponseAdapter.adapt(response))
      );
  }
}
