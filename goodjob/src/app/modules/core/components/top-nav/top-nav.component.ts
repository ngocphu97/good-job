import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PublishNowDialogComponent } from '@app/dialog/containers/publish-now-dialog/publish-now-dialog.component';

declare var FB: any;



@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Output() logoutSignal = new EventEmitter();

  // NOT USING ANY MORE

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onSelectAnalytics() {
    this.router.navigate(['/analytics']);
  }

  logoutWithFb() {
    this.logoutSignal.emit();
  }

  // openDialog(): void {
  //   const dialogConfig = {
  //     maxWidth: '1300px',
  //     width: '1300px',
  //     height: '600px',
  //     panelClass: 'custom-panel',
  //     data: { name: this.name, animal: this.animal }
  //   };

  //   const dialogRef = this.dialog.open(PublishNowDialogComponent, dialogConfig);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

  // openDialog() {
  //   const dialogConfig = {
  //     maxWidth: '1300px',
  //     width: '1300px',
  //     height: '600px',
  //     panelClass: 'custom-panel',
  //     data: { name: this.name, animal: this.animal }
  //   };

  //   const dialogRef = this.dialog.open(PublishNowDialogComponent, dialogConfig);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
}


