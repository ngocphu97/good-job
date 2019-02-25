import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  members = [
    {
      name: 'name 1'
    },
    {
      name: 'name 1'
    },
    {
      name: 'name 1'
    },
    {
      name: 'name 1'
    },
    {
      name: 'name 1'
    },
    {
      name: 'name 1'
    },
    {
      name: 'name 1'
    },
    {
      name: 'name 1'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
