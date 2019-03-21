import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishNowDialogComponent } from './publish-now-dialog.component';

describe('PublishNowDialogComponent', () => {
  let component: PublishNowDialogComponent;
  let fixture: ComponentFixture<PublishNowDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishNowDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishNowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
