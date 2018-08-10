import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SchedulePostDialogComponent } from '../schedule-post-dialog/schedule-post-dialog.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SchedulePostDialogComponent, {
      width: '1086px',
      data: {
        title: 'Schedule post now'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
