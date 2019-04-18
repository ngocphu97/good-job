import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanByCityComponent } from './fan-by-city.component';

describe('FanByCityComponent', () => {
  let component: FanByCityComponent;
  let fixture: ComponentFixture<FanByCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanByCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
