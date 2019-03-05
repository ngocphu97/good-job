import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubishDialogComponent } from './pubish-dialog.component';

describe('PubishDialogComponent', () => {
  let component: PubishDialogComponent;
  let fixture: ComponentFixture<PubishDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubishDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubishDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
