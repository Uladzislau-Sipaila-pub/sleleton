import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NearEarthObjectResolver } from './near-earth-object.resolver';
import { NearEarthObjectComponent } from './near-earth-object/near-earth-object.component';

const routes: Routes = [{
  path: ':id',
  component: NearEarthObjectComponent,
  runGuardsAndResolvers: 'paramsChange',
  resolve: {
    nearEarthObject: NearEarthObjectResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [NearEarthObjectResolver]
})
export class NearEarthObjectRoutingModule { }
