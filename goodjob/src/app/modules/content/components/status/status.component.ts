import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';

import {
  CalendarEvent
} from 'angular-calendar';

declare var FB: any;

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  eventsSuccess = [];
  eventsFails = [];

  events: CalendarEvent[] = [];

  constructor(private service: ContentService) { }

  ngOnInit() {
  }

  getFeed() {
    this.events = this.service.getFeeds();
    console.log(this.events);
  }
}
