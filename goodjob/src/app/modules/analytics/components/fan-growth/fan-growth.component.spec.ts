import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanGrowthComponent } from './fan-growth.component';

describe('FanGrowthComponent', () => {
  let component: FanGrowthComponent;
  let fixture: ComponentFixture<FanGrowthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanGrowthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
