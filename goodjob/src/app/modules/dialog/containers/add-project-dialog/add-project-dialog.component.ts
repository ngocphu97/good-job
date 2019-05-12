import { Component, OnInit, Inject, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

export interface DialogData {
  users: any;
}

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.scss']
})
export class AddProjectDialogComponent implements OnInit {

  @ViewChild('target', { read: ViewContainerRef }) vcRef: ViewContainerRef;

  projectFromGroup: FormGroup;
  clientControl = new FormControl();
  users = [];
  facebookConnectAccout = [];

  selectedMember = [];
  selectedPage = [];

  componentRef: ComponentRef<any>;
  newGroup$: Observable<any>;

  constructor(
    public dialogRef: MatDialogRef<AddProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.data.users.forEach(d => {
      this.facebookConnectAccout.push(d);
    });
  }

  onSelectedChanel(connectAccount) {
    this.selectedPage = connectAccount;
  }

  onSelectedMembers(selectedMember) {
    this.selectedMember = selectedMember;
  }

  uuid() {
    const min = Math.ceil(1);
    const max = Math.floor(1000);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  onDone(projectName) {
    this.newGroup$ = new Observable(observer => {
      const projectInfo = {
        id: this.uuid(),
        projectName: projectName,
        connectAccounts: this.selectedPage,
        members: this.selectedMember
      };
      observer.next(projectInfo);
    });

    this.newGroup$.subscribe(d => console.log(d));
  }
}
