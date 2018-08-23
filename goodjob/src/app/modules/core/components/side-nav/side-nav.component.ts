import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NavigateService } from '../../services/navigate/navigate.service';
import { User } from '../../services/navigate/model/user.model';
import { Observable } from 'rxjs';
import { Client } from '../../models/response-data.model';

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

  constructor(private navigateService: NavigateService) { }

  ngOnInit() {
    this.getUsers();
    this.getInfo();
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
        access_token: 'EAAFiVT3Gv5EBAHydZBQk7lrwbUPpasARDplxDPfZBC4drjnZAIBJ4QRF54RHHPG8l2wOMAPiXhKqhgcJ2FZBUPjK8wHCGSSdpturvkphPYLui8N7HHZBfb7nZCug68broEuX5ZBuYHAgMAWf2bGwIA7ZBpY5yueHaevNVOHo8MwZBat6WFSFZBXZAyu1R3y4F2CZAPUZD',
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


}
