import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'objects',
  loadChildren: () => import('./pages/near-earth-objects/near-earth-objects.module').then(mod => mod.NearEarthObjectsModule)
}, {
  path: 'object',
  loadChildren: () => import('./pages/near-earth-object/near-earth-object.module').then(mod => mod.NearEarthObjectModule)
}, {
  path: '',
  redirectTo: 'objects',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
