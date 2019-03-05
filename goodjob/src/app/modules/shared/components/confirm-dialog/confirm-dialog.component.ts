import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

export interface ConfirmOptions {
  title?: string;
  message?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {
  options: ConfirmOptions = {
    title: 'Delete',
    message: 'Are you sure want to delete?',
    confirmButtonText: 'Delete'
    // cancelButtonText: 'Cancel'
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data?: ConfirmOptions) {
    this.options = { ...this.options, ...data };
  }
}
