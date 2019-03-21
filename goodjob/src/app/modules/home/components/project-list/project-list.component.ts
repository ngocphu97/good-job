import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';

import { HomeService } from '../../services/home.service';
import { AddProjectDialogComponent } from '@app/dialog/containers/add-project-dialog/add-project-dialog.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects$: Observable<any>;

  users = [];

  constructor(
    private service: HomeService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projects$ = this.service.getUsers();
    this.projects$.subscribe(data => {
      this.users.push(data);
    });
  }

  onOpenProjectDialog(): void {
    const dialogRef = this.dialog.open(AddProjectDialogComponent, {
      width: '1300px',
      maxWidth: '1300px',
      height: '600px',
      panelClass: 'custom-add-project-panel',
      data: {
        users: this.users
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }


  getUserConnectPage() {
    // this.clients = this.service.getInfo();
  }

  // onOpenProjectDialog(): void {
  //   if (this.projects$) {
  //     const dialogRef = this.dialog.open(ConfirmDialogComponent, {
  //       width: '1000px',
  //       data: {
  //         title: 'Login again',
  //         message: 'Your token out of time',
  //         confirmButtonText: 'OK',
  //       }
  //     });
  //     dialogRef.afterClosed().subscribe(result => {
  //       console.log(result);
  //       //  this.router.navigateByUrl('/');
  //     });
  //   } else {
  //     const dialogRef = this.dialog.open(AddProjectDialogComponent, {
  //       width: '1000px',
  //       data: this.projects$
  //     });

  //     dialogRef.afterClosed().subscribe(result => {
  //       console.log(result);
  //     });
  //   }
  // }

  selectGroup(group) {
  }
}
