import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


import { Group } from '../../models/group';
import { CalendarEvent } from 'calendar-utils';
import { ContentService } from '../../services/content.service';
import { Client } from '../../models/client';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-group-form',
  templateUrl: './add-group-form.component.html',
  styleUrls: ['./add-group-form.component.scss']
})
export class AddGroupFormComponent implements OnInit {
  groups: Group[] = [];
  events: CalendarEvent[] = [];
  clientsSelected: Client[] = [];
  groupName = '';

  firstFormGroup: FormGroup;
  clientControl = new FormControl();

  constructor(public dialogRef: MatDialogRef<AddGroupFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private service: ContentService,
    private postForm: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.postForm.group({
      clientControl: ['', [Validators.required]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addGroup(groupName) {
    const g: Group = {
      id: '1',
      groupName: groupName,
      clients: this.clientsSelected
    };
    this.groups.push(g);
  }
}
