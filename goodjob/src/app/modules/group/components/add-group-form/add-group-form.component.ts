import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GroupService } from '../../service/group.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-group-form',
  templateUrl: './add-group-form.component.html',
  styleUrls: ['./add-group-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddGroupFormComponent implements OnInit {

  data$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  listMember = [];
  memberConnectAccounts = [];

  panelOpenState = true;
  tasks = [
    {
      describe: 'Can add / delete members to / from a channel',
      tasks: [
        'ANALYZE',
        'ADVERTISE',
        'MODERATE',
        'CREATE_CONTENT',
        'MANAGE'
      ]
    },
    {
      describe: 'Can create, edit and manage posts',
      tasks: [
        'ANALYZE',
        'ADVERTISE',
        'MODERATE',
        'CREATE_CONTENT',
        'MANAGE'
      ]
    },
    {
      describe: 'Can set a posting schedule',
      tasks: [
        'ANALYZE',
        'ADVERTISE',
        'MODERATE',
        'CREATE_CONTENT',
        'MANAGE'
      ]
    },
    {
      describe: 'Can add / remove personal accounts to / from a channel',
      tasks: [
        'ANALYZE',
        'ADVERTISE',
        'MODERATE',
        'CREATE_CONTENT',
        'MANAGE'
      ]
    },
    {
      describe: 'Can add / remove team accounts to / from a team channel',
      tasks: [
        'ANALYZE',
        'ADVERTISE',
        'MODERATE',
        'CREATE_CONTENT',
        'MANAGE'
      ]
    }
  ];

  color = 'accent';
  checked = true;
  disabled = false;

  position = new FormControl('above');

  constructor(private service: GroupService) { }

  ngOnInit() {
    this.getTeamMember();
    this.getMemberConnect();
  }

  getTeamMember() {
    this.service.getMemberInfoById('1').subscribe(data => {
      console.log(data);
      this.listMember.push(data);
      this.data$.next(data);
    });
  }

  getMemberConnect() {
    this.service.getMemberConnectAccout().subscribe(data => {
      console.log(data);
      data.forEach(d => {
        const connectAccount = {
          access_token: d.access_token,
          id: d.id,
          name: d.name,
          picture: d.picture.data.url,
          tasks: d.tasks
        };
        this.memberConnectAccounts.push(connectAccount);
      });
      this.data$.next(this.memberConnectAccounts);
    });
  }

}
