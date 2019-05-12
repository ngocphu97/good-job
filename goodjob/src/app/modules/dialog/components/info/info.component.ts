import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() facebookConnectAccount: Array<any>;
  @Input() selectedPage: Observable<any>;
  @Output() done = new EventEmitter();

  projectName = '';

  constructor() { }

  ngOnInit() {
    this.selectedPage.subscribe(val => {
      console.log(val);
    });
  }

  onSelectFacebookChanel() {
    console.log(this.facebookConnectAccount);
  }

  onDone() {
    console.log(this.projectName);
    this.done.emit(this.projectName);
  }


}
