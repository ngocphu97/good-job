import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NavigateService } from '../../services/navigate/navigate.service';
import { User } from '../../services/navigate/model/user.model';
import { Observable } from 'rxjs';
import { Client } from '../../models/response-data.model';
import { Router } from '@angular/router';

declare var FB: any;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Output()
  userSelected = new EventEmitter();
  @Input()
  userList: User[];

  users: User[] = [];

  connectAccount = new Array<Client>();

  constructor(private navigateService: NavigateService, private router: Router) { }

  ngOnInit() {
    // this.getInfo();
  }

  onSelect(user: User) {
    this.userSelected.emit(user);
  }

  getUsers() {
    this.navigateService.getUsers().subscribe((data) => {
      return this.users = data;
    });
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


}
