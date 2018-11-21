import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetLikeComponent } from './net-like.component';

describe('NetLikeComponent', () => {
  let component: NetLikeComponent;
  let fixture: ComponentFixture<NetLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
