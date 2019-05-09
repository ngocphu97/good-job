import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Client } from '../../models/response-data.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PublishNowDialogComponent, AddProjectDialogComponent } from '@app/dialog/containers';
import { ConnectFacebookService } from '@app/core/services/facebook/connect-facebook.service';
import { Subject } from 'rxjs';

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
  animal = 'dog';
  name = 'phu';
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
    // {
    //   name: 'Content plan',
    //   icon: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png',
    //   url: '/content-plan'
    // },
    // {
    //   name: 'Analytics',
    //   icon: 'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Analytics-512.png',
    //   url: '/analytics'
    // },
    // {
    //   name: 'Status',
    //   icon: 'https://cdn2.iconfinder.com/data/icons/flat-school/256/school_certificate_document_testimonial_instrument-512.png',
    //   url: '/status'
    // },
  ];

  projects = [
    {
      name: 'Project 1',
      thumnail: 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/house-icon.png'
    },
    {
      name: 'Project 2',
      thumnail: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png'
    },
    {
      name: 'Project 3',
      thumnail: 'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Analytics-512.png'
    },
    {
      name: 'Project 4',
      thumnail: 'https://cdn2.iconfinder.com/data/icons/flat-school/256/school_certificate_document_testimonial_instrument-512.png'
    },
  ];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private connectFBService: ConnectFacebookService
  ) { }

  ngOnInit() {
    this.getInfo();
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

  onSelectEditContent() {
    this.router.navigateByUrl('/content');
  }

  onAddProject() {
    console.log('add project');
  }

  openPublishNowDialog() {
    const dialogConfig = {
      maxWidth: '1300px',
      width: '1300px',
      height: '600px',
      panelClass: 'custom-panel',
      data: {
        name: this.name,
        animal: this.animal
      }
    };

    const dialogRef = this.dialog.open(PublishNowDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onOpenProjectDialog() {
    console.log(this.connectFacebookAccount$);
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

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }


}
