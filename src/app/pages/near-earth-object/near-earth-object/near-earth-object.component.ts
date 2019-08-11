import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NearEarthObject } from '@shared/models/near-earth-object';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-near-earth-object',
  templateUrl: './near-earth-object.component.html',
  styleUrls: ['./near-earth-object.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NearEarthObjectComponent implements OnInit, OnDestroy {
  nearEarthObject: NearEarthObject = null;

  private routeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.data.subscribe(data => {
      this.nearEarthObject = data.nearEarthObject;
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
