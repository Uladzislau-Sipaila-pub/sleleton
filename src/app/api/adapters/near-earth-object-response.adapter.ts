import { Injectable } from '@angular/core';
import { NearEarthObject } from '@shared/models/near-earth-object';
import { Adapter } from '@shared/types/adapter';

@Injectable({
  providedIn: 'root'
})
export class NearEarthObjectResponseAdapter implements Adapter<NearEarthObject> {

  constructor() { }

  adapt(item: any): NearEarthObject {
    const id: string = item.id || '0';
    const name: string = item.name || '';
    const absoluteMagnitudeH: number = item.absolute_magnitude_h || 0;
    const estimatedDiameterMin: number = item.estimated_diameter.meters.estimated_diameter_min || 0;
    const estimatedDiameterMax: number = item.estimated_diameter.meters.estimated_diameter_max || 0;
    const isPotentiallyHazardousAsteroid: boolean = item.is_potentially_hazardous_asteroid || false;
    const isSentryObject: boolean = item.is_sentry_object || false;

    return {
      id,
      name,
      absoluteMagnitudeH,
      estimatedDiameter: {
        estimatedDiameterMin,
        estimatedDiameterMax,
      },
      isPotentiallyHazardousAsteroid,
      isSentryObject
    };
  }
}
