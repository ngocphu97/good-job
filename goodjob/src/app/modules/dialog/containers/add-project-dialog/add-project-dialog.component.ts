import { Component, OnInit, Inject, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface DialogData {
  users: any;
}

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.scss']
})
export class AddProjectDialogComponent implements OnInit {

  projectFromGroup: FormGroup;
  clientControl = new FormControl();
  users = [];

  @ViewChild('target', { read: ViewContainerRef }) vcRef: ViewContainerRef;

  componentRef: ComponentRef<any>;

  constructor(
    public dialogRef: MatDialogRef<AddProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.data.users.forEach(d => {
      console.log(d);
      this.users.push(d);
    });
  }
}
