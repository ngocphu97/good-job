import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Client } from '../../models/response-data.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PublishNowDialogComponent, AddProjectDialogComponent } from '@app/dialog/containers';

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

  @Output()
  userSelected = new EventEmitter();
  connectAccount = new Array<Client>();
  animal = 'dog';
  name = 'phu';
  users = [];

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

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onSelect(user: any) {
    this.userSelected.emit(user);
  }

  getUsers() {
    // get users from service
  }

  getInfo() {
    const array = this.connectAccount;
    FB.api(`/me`, 'GET',
      {
        // tslint:disable-next-line:max-line-length
        access_token: 'EAANQlAVxZBd4BANA4ZBrCf35WFKzMWkACbptczKYr6Swtmr9WSoRwatTumZA0VBXUefHbJrfqb4k5Piq9utRcSYTttkNFLkf4fc08QM9OMMu7ZBOvAx3exgvDwRhEwK4NwccnvZBJSehsWqkFDkeZCL8BzJscdqIPYAi9982KQAbBXJtpcrUdE36y7j0c1x0u8B3vgmwozEveYjDySXwOjZC8JEDWwcYXQZD',
        fields: 'accounts{name, photos.width(150).height(150){picture}}'
      }, (response) => {
        const length = response.accounts.data.length;
        for (let i = 0; i < length; i++) {
          const photo = response.accounts.data[i].photos;
          const avatar = photo.data[0].picture;
          const data = response.accounts.data[i].name;
          const client: Client = {
            name: data,
            image: avatar
          };

          array.push(client);
        }
        if (response.error) {
          console.log(response.error);
        }
      }
    );
  }

  onSelectEditContent() {
    this.router.navigateByUrl('/content');
  }

  onAddProject() {
    console.log('add project');
  }

  openDialog() {
    const dialogConfig = {
      maxWidth: '1300px',
      width: '1300px',
      height: '600px',
      panelClass: 'custom-panel',
      data: { name: this.name, animal: this.animal }
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
        users: []
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }


}
