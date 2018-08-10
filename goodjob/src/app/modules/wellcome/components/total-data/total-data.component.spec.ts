import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDataComponent } from './total-data.component';

describe('TotalDataComponent', () => {
  let component: TotalDataComponent;
  let fixture: ComponentFixture<TotalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
