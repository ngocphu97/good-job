import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wellcome-user',
  templateUrl: './wellcome-user.component.html',
  styleUrls: ['./wellcome-user.component.scss']
})
export class WellcomeUserComponent implements OnInit {

  userLogoUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png';

  constructor() { }

  ngOnInit() {
  }

}
