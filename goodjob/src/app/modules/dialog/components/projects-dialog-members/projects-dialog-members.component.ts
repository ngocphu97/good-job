import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projects-dialog-members',
  templateUrl: './projects-dialog-members.component.html',
  styleUrls: ['./projects-dialog-members.component.scss']
})
export class ProjectsDialogMembersComponent implements OnInit {

  @Output() selectedMember = new EventEmitter();

  members = [
    {
      id: '1',
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      role: 'admin',
    },
    {
      id: '2',
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      role: 'admin',
    },
  ];

  displayMembers = [];

  constructor() { }

  ngOnInit() {
  }

  onNgModelChange() {
    this.selectedMember.emit(this.members);
  }

}
