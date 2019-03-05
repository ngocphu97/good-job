import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../top-nav/top-nav.component';

@Component({
  selector: 'app-pubish-dialog',
  templateUrl: './pubish-dialog.component.html',
  styleUrls: ['./pubish-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PubishDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PubishDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
