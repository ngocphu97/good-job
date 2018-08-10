import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportToFileComponent } from './export-to-file.component';

describe('ExportToFileComponent', () => {
  let component: ExportToFileComponent;
  let fixture: ComponentFixture<ExportToFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportToFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportToFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
