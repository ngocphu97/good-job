import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { Client } from '../../models/client';
import { ConfirmDialogComponent } from '@app/shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ContentService } from '../../services/content.service';

import { User } from '@app/core/services/navigate/model/user.model';
import { IgxCalendarComponent } from 'igniteui-angular';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  @ViewChild('calendar') public calendar: IgxCalendarComponent;

  clients: User[] = [];
  events = [];
  clientsSelected: Array<Client> = [];
  currentDateTime = new Date();
  selectedDateTime = new Date();

  content = '';
  imgPreview = '';
  url: '';
  result: any;
  files: any;
  base64textString = [];

  private exportTime = {
    hour: this.currentDateTime.getHours(),
    minute: this.currentDateTime.getMinutes(),
    meriden: this.currentDateTime.getHours() >= 12 ? 'PM' : 'AM',
    format: 12
  };
  private exportTime24 = { hour: 7, minute: 15, meriden: 'PM', format: 24 };

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  clientControl = new FormControl();
  timeControl = new FormControl();
  postControl = new FormControl();

  constructor(
    private datepipe: DatePipe,
    private dialog: MatDialog,
    public snackBar: MatSnackBar,
    private postForm: FormBuilder,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.getClients();
    this.firstFormGroup = this.postForm.group({
      clientControl: ['', [Validators.required]]
    });
    this.secondFormGroup = this.postForm.group({
      dateControl: ['', []],
    });
    this.thirdFormGroup = this.postForm.group({
      postControl: ['', []]
    });
  }

  getClients() {
    this.contentService.getClients().subscribe((data) => {
      return this.clients = data;
    });
  }

  checkClient(clients) {
    this.clientsSelected = clients;
    if (this.clientsSelected.length === 0) {
      this.isLinear = true;
      this.openDialog();
    }
  }

  checkDateTime(selectedDateTime) {
    this.selectedDateTime = selectedDateTime;
  }

  checkPost(post) {
    this.content = post;
  }

  onAccept(evt) {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
  }

  onDeleteImgPreview(item) {
    const index = this.base64textString.indexOf(item);
    this.base64textString.splice(index, 1);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {
        title: 'Not yet choose',
        message: 'You must choose at leat one to continue ',
        confirmButtonText: 'Ok'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onSelectedDate(event: any) {
    this.currentDateTime = event.value;
  }

  onRevert() {
    this.snackBar.open(`Revert time to ${this.exportTime24.hour}:${this.exportTime24.minute} ${this.exportTime24.meriden}`, null, {
      duration: 500,
    });
  }

  onSubmitTime(time: any) {
    this.snackBar.open(`Saved time ${this.exportTime.hour}:${this.exportTime.minute} ${this.exportTime.meriden}`, null, {
      duration: 500,
    });

    if (this.exportTime.meriden === 'PM') {
      this.selectedDateTime.setHours(this.exportTime.hour + 12);
    } else {
      this.selectedDateTime.setHours(this.exportTime.hour);
    }

    this.selectedDateTime.setMinutes(this.exportTime.minute);
    this.selectedDateTime.setSeconds(0);
  }

  onSubmit() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {
        title: 'Submit',
        message: 'Your post is saved to database ',
        confirmButtonText: 'Ok'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  getEvents(dates: Date[]) {
    const date = this.datepipe.transform(this.calendar.value, 'MM/dd/yyy');

    this.contentService.getClientPostByClientDate(date).subscribe(result => {
      this.events = result;
    });
  }
}
