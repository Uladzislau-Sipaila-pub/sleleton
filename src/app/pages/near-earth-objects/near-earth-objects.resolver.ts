import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { NearEarthObjectsService } from '@api/services/near-earth-objects.service';
import { Observable } from 'rxjs';
import { NearEarthObject } from '@shared/models/near-earth-object';

@Injectable()
export class NearEarthObjectsResolver implements Resolve<Observable<NearEarthObject[]>> {
    constructor(private nearEarthObjectsService: NearEarthObjectsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NearEarthObject[]> {
        return this.nearEarthObjectsService.getNearEarthObjects();
    }
}
