import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Client } from '../../models/response-data.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PublishNowDialogComponent, AddProjectDialogComponent } from '@app/dialog/containers';
import { ConnectFacebookService } from '@app/core/services/facebook/connect-facebook.service';
import { Subject, Observable } from 'rxjs';

declare var FB: any;

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Output() userSelected = new EventEmitter();
  connectAccount = new Array<Client>();
  users = [];

  connectFacebookAccount$ = new Subject();

  menu = [
    {
      name: 'Home',
      icon: 'home',
      url: '/'
    },
    {
      name: 'Member',
      icon: 'people',
      url: '/'
    },
    {
      name: 'Projects',
      icon: 'shop_two',
      url: '/'
    },
  ];

  projectList = [];
  project$: Observable<any>;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private connectFBService: ConnectFacebookService
  ) { }

  ngOnInit() {
    this.getProjects();
    this.getInfo();
  }

  getProjects() {
    this.connectFBService.getProjects().subscribe(d => {
      return this.projectList = Object.keys(d.result).map((key) => {
        return d.result[key];
      });
    });
  }

  onSelect(user: any) {
    this.userSelected.emit(user);
  }

  getUsers() {
    // get users from service
  }

  getInfo() {
    this.connectFBService.getFacebookConnectAccount().subscribe(data => {
      this.connectFacebookAccount$ = data;
    });
  }

  onSelectProject(project) {
    this.router.navigateByUrl(`/content-plan/${project.id}`);
  }


  onSelectEditContent() {
    this.router.navigateByUrl('/content');
  }

  openPublishNowDialog() {
    const dialogConfig = {
      maxWidth: '1300px',
      width: '1300px',
      height: '600px',
      panelClass: 'custom-panel',
      data: {
        name: 'this.name',
        animal: 'this.animal'
      }
    };

    const dialogRef = this.dialog.open(PublishNowDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onOpenProjectDialog() {
    const dialogRef = this.dialog.open(AddProjectDialogComponent, {
      width: '1300px',
      maxWidth: '1300px',
      height: '600px',
      panelClass: 'custom-add-project-panel',
      data: {
        users: [
          {
            id: 'user_id',
            connectAccount: this.connectFacebookAccount$
          }
        ]
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      dialogRef.componentInstance.newGroup$.subscribe(project => {
        this.projectList.push(project);
        this.connectFBService.addProject(project).subscribe();
      });
    });
  }


}
