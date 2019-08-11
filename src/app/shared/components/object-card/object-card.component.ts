import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NearEarthObject } from '@shared/models/near-earth-object';

@Component({
  selector: 'app-object-card',
  templateUrl: './object-card.component.html',
  styleUrls: ['./object-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectCardComponent {
  @Input() nearEarthObject: NearEarthObject;

  constructor() { }
}
