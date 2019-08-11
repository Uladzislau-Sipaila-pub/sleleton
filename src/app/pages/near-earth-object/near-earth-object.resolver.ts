import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { NearEarthObjectsService } from '@api/services/near-earth-objects.service';
import { NearEarthObject } from '@shared/models/near-earth-object';
import { Observable } from 'rxjs';

@Injectable()
export class NearEarthObjectResolver implements Resolve<Observable<NearEarthObject>> {
    constructor(private nearEarthObjectsService: NearEarthObjectsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NearEarthObject> {
        const id = route.params.id;

        return this.nearEarthObjectsService.getNearEarthObject(id);
    }
}
