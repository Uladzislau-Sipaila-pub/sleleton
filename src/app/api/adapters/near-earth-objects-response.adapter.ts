import { Injectable } from '@angular/core';
import { NearEarthObject } from '@shared/models/near-earth-object';
import { Adapter } from '@shared/types/adapter';

import { NearEarthObjectResponseAdapter } from './near-earth-object-response.adapter';

@Injectable({
  providedIn: 'root'
})
export class NearEarthObjectsResponseAdapter implements Adapter<NearEarthObject[]> {

  constructor(
    private nearEarthObjectResponseAdapter: NearEarthObjectResponseAdapter
  ) { }

  adapt(item: any): NearEarthObject[] {
    const nearEarthObjectsByDate = item.near_earth_objects || {};
    const todayKey = Object.keys(nearEarthObjectsByDate)[0];
    const nearEarthObjects = nearEarthObjectsByDate[todayKey];

    return nearEarthObjects.map(nearEarthObject => this.nearEarthObjectResponseAdapter.adapt(nearEarthObject));
  }
}
