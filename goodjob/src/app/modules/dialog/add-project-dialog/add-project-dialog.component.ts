import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { DialogService } from '../service/dialog.service';

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

  constructor(public dialogRef: MatDialogRef<AddProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private service: DialogService,
    private projectForm: FormBuilder) { }

  ngOnInit() {
    this.data.users.forEach(d => {
      console.log(d);
      this.users.push(d);
    });
    console.log(this.users);
  }
}
