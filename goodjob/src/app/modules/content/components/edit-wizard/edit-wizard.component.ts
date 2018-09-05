import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

import { ContentService } from '../../services/content.service';
import { Group } from '../../models/group';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddGroupFormComponent } from '../add-group-form/add-group-form.component';
import { Client } from '../../models/client';

@Component({
  selector: 'app-edit-wizard',
  templateUrl: './edit-wizard.component.html',
  styleUrls: ['./edit-wizard.component.scss']
})
export class EditWizardComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  content = '';
  base64textString = [];
  groups: Group[] = [];
  events: CalendarEvent[] = [];
  clients: Client[] = [];

  selectedGroup: Group = {
    id: '',
    groupName: '',
    clients: [],
    created_time: ''
  };

  constructor(private _formBuilder: FormBuilder, private service: ContentService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getInfo();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onAccept(evt) {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddGroupFormComponent, {
      width: '1000px',
      data: this.clients
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('result: ', result);
      const g: Group = {
        id: '1',
        groupName: result[0].groupName,
        clients: result[0].clients
      };
      this.groups.push(g);
      console.log('this.group: ', this.groups);
    });

    console.log('this.group out: ', this.groups);
  }

  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + window.btoa(e.target.result));
  }

  onDeleteImgPreview(item) {
    const index = this.base64textString.indexOf(item);
    this.base64textString.splice(index, 1);
  }

  getInfo() {
    this.clients = this.service.getInfo();
  }

  selectGroup(group: Group) {
    console.log(this.groups);
    this.selectedGroup = this.groups.find(function (g) {
      return g.groupName === group.groupName;
    });
    console.log(this.selectedGroup);
  }

}
