import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  @Input() facebookConnectAccount;
  @Output() selectedChannel = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.facebookConnectAccount);
  }

  removeFanPage(pageId) {
    this.facebookConnectAccount[0].connectAccount = this.facebookConnectAccount[0].connectAccount.filter(page => page.id !== pageId);
    this.selectedChannel.emit(this.facebookConnectAccount);
  }

}
