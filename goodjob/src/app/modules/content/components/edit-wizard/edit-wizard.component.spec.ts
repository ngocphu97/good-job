import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWizardComponent } from './edit-wizard.component';

describe('EditWizardComponent', () => {
  let component: EditWizardComponent;
  let fixture: ComponentFixture<EditWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
