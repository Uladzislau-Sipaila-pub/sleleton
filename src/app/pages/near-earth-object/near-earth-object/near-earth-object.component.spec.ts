import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearEarthObjectComponent } from './near-earth-object.component';

describe('NearEarthObjectComponent', () => {
  let component: NearEarthObjectComponent;
  let fixture: ComponentFixture<NearEarthObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearEarthObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearEarthObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
