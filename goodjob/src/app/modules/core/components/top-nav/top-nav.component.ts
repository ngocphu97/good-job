import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PubishDialogComponent } from '../pubish-dialog/pubish-dialog.component';

declare var FB: any;

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Output() logoutSignal = new EventEmitter();

  animal: string;
  name: string;
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onSelectAnalytics() {
    this.router.navigate(['/analytics']);
  }

  logoutWithFb() {
    this.logoutSignal.emit();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PubishDialogComponent, {
      maxWidth: '1300px',
      width: '1300px',
      height: '600px',
      panelClass: 'custom-panel',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
