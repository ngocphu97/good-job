import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  @Input() facebookConnectAccount;
  @Output() selectedChannel = new EventEmitter();
  connectAccount = [];

  constructor() { }

  ngOnInit() {
    this.connectAccount = [];
  }

  onNgModelChange(e) {
    this.selectedChannel.emit(this.connectAccount);
  }

}
