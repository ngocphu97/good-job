import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFansOnlineComponent } from './page-fans-online.component';

describe('PageFansOnlineComponent', () => {
  let component: PageFansOnlineComponent;
  let fixture: ComponentFixture<PageFansOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFansOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFansOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
