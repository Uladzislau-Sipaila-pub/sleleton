import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NearEarthObject } from '@shared/models/near-earth-object';

@Component({
  selector: 'app-near-earth-objects',
  templateUrl: './near-earth-objects.component.html',
  styleUrls: ['./near-earth-objects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NearEarthObjectsComponent implements OnInit, OnDestroy {
  nearEarthObjects: NearEarthObject[] = [];

  private routeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.data.subscribe(data => {
      this.nearEarthObjects = data.nearEarthObjects;
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
