import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() facebookConnectAccount: Array<any>;
  value = '';

  constructor() { }

  ngOnInit() {
  }

  onSelectFacebookChanel() {
    console.log(this.facebookConnectAccount);
  }


}
