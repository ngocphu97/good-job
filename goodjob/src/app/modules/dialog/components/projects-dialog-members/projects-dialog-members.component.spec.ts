import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDialogMembersComponent } from './projects-dialog-members.component';

describe('ProjectsDialogMembersComponent', () => {
  let component: ProjectsDialogMembersComponent;
  let fixture: ComponentFixture<ProjectsDialogMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsDialogMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsDialogMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
