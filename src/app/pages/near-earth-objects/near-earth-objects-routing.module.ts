import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NearEarthObjectsResolver } from './near-earth-objects.resolver';
import { NearEarthObjectsComponent } from './near-earth-objects/near-earth-objects.component';

const routes: Routes = [{
  path: '',
  component: NearEarthObjectsComponent,
  resolve: {
    nearEarthObjects: NearEarthObjectsResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    NearEarthObjectsResolver
  ],
  exports: [RouterModule]
})
export class NearEarthObjectsRoutingModule { }
