import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NearEarthObject } from '@shared/models/near-earth-object';

@Component({
  selector: 'app-objects-list',
  templateUrl: './objects-list.component.html',
  styleUrls: ['./objects-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectsListComponent {
  @Input() nearEarthObjects: NearEarthObject[];

  constructor() { }
}
