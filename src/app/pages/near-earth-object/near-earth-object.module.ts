import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared/shared.module';

import { NearEarthObjectRoutingModule } from './near-earth-object-routing.module';
import { NearEarthObjectComponent } from './near-earth-object/near-earth-object.component';

@NgModule({
  declarations: [NearEarthObjectComponent],
  imports: [
    MatButtonModule,
    SharedModule,
    CommonModule,
    NearEarthObjectRoutingModule
  ]
})
export class NearEarthObjectModule {}
