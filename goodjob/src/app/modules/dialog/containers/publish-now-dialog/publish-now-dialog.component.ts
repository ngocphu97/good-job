import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';

export interface DialogData {
  users: any;
}

@Component({
  selector: 'app-publish-now-dialog',
  templateUrl: './publish-now-dialog.component.html',
  styleUrls: ['./publish-now-dialog.component.scss']
})
export class PublishNowDialogComponent {

  action = '';
  date = new FormControl(new Date());

  constructor(
    public dialogRef: MatDialogRef<PublishNowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onPublishNow() {
    // publish post now
  }
  onAddToQueue() {
    // add post to queue
  }
  onSchedule() {
    // schedule post
  }

}
