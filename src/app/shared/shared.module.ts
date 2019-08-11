import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { ObjectCardComponent } from './components/object-card/object-card.component';
import { ObjectsListComponent } from './components/objects-list/objects-list.component';

@NgModule({
  declarations: [
    ObjectsListComponent,
    ObjectCardComponent
  ],
  exports: [
    ObjectsListComponent,
    ObjectCardComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatListModule,
    MatCardModule
  ]
})
export class SharedModule { }
