import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { NearEarthObjectsRoutingModule } from './near-earth-objects-routing.module';
import { NearEarthObjectsComponent } from './near-earth-objects/near-earth-objects.component';

@NgModule({
  declarations: [NearEarthObjectsComponent],
  imports: [
    SharedModule,
    CommonModule,
    NearEarthObjectsRoutingModule
  ]
})
export class NearEarthObjectsModule { }
