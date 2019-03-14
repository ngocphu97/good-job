import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';

import {
  CalendarEvent
} from 'angular-calendar';
import { Observable, Observer } from 'rxjs';

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
  tabColor = 'accent';
  // events: CalendarEvent[] = [];

  events$: Observable<any>;

  constructor(private service: ContentService) { }

  ngOnInit() {
    this.getFeed();
  }

  generateFakeEvent() {
    const fakeEvents = [
      {
        avatar: 'https://www.unileverusa.com/Images/dove_tcm1269-408752_w280.png',
        postThumnail: 'https://logos-download.com/wp-content/uploads/2016/03/Dove_logo_small_2_different_brands.png',
        postContent: `Lorem ipsum dolor sit amet
  consectetur adipisicing elit.
  Veritatis odio molestias ducimus
  quidem cupiditate nesciunt vitae doloribus enim ea
  que sed, ut quis! Quos, rem, suscipit sequi neque e
  xplicabo possimus a non voluptates ipsum impedit, id ea
  quaerat inventore officiis tempora?` ,
        date: new Date,
        status: 'done',
        link: 'https://google.com'
      },
      {
        avatar: 'https://www.unileverusa.com/Images/dove_tcm1269-408752_w280.png',
        postThumnail: 'https://logos-download.com/wp-content/uploads/2016/03/Dove_logo_small_2_different_brands.png',
        postContent: `Lorem ipsum dolor sit amet
  consectetur adipisicing elit.
  Veritatis odio molestias ducimus
  quidem cupiditate nesciunt vitae doloribus enim ea
  que sed, ut quis! Quos, rem, suscipit sequi neque e
  xplicabo possimus a non voluptates ipsum impedit, id ea
  quaerat inventore officiis tempora?` ,
        date: new Date,
        status: 'done',
        link: 'https://google.com'
      },
      {
        avatar: 'https://www.unileverusa.com/Images/dove_tcm1269-408752_w280.png',
        postThumnail: 'https://logos-download.com/wp-content/uploads/2016/03/Dove_logo_small_2_different_brands.png',
        postContent: `Lorem ipsum dolor sit amet
  consectetur adipisicing elit.
  Veritatis odio molestias ducimus
  quidem cupiditate nesciunt vitae doloribus enim ea
  que sed, ut quis! Quos, rem, suscipit sequi neque e
  xplicabo possimus a non voluptates ipsum impedit, id ea
  quaerat inventore officiis tempora?` ,
        date: new Date,
        status: 'done',
        link: 'https://google.com'
      },
      {
        avatar: 'https://www.unileverusa.com/Images/dove_tcm1269-408752_w280.png',
        postThumnail: 'https://logos-download.com/wp-content/uploads/2016/03/Dove_logo_small_2_different_brands.png',
        postContent: `Lorem ipsum dolor sit amet
  consectetur adipisicing elit.
  Veritatis odio molestias ducimus
  quidem cupiditate nesciunt vitae doloribus enim ea
  que sed, ut quis! Quos, rem, suscipit sequi neque e
  xplicabo possimus a non voluptates ipsum impedit, id ea
  quaerat inventore officiis tempora?` ,
        date: new Date,
        status: 'done',
        link: 'https://google.com'
      },
      {
        avatar: 'https://www.unileverusa.com/Images/dove_tcm1269-408752_w280.png',
        postThumnail: 'https://logos-download.com/wp-content/uploads/2016/03/Dove_logo_small_2_different_brands.png',
        postContent: `Lorem ipsum dolor sit amet
  consectetur adipisicing elit.
  Veritatis odio molestias ducimus
  quidem cupiditate nesciunt vitae doloribus enim ea
  que sed, ut quis! Quos, rem, suscipit sequi neque e
  xplicabo possimus a non voluptates ipsum impedit, id ea
  quaerat inventore officiis tempora?` ,
        date: new Date,
        status: 'done',
        link: 'https://google.com'
      },
      {
        avatar: 'https://www.unileverusa.com/Images/dove_tcm1269-408752_w280.png',
        postThumnail: 'https://logos-download.com/wp-content/uploads/2016/03/Dove_logo_small_2_different_brands.png',
        postContent: `Lorem ipsum dolor sit amet
  consectetur adipisicing elit.
  Veritatis odio molestias ducimus
  quidem cupiditate nesciunt vitae doloribus enim ea
  que sed, ut quis! Quos, rem, suscipit sequi neque e
  xplicabo possimus a non voluptates ipsum impedit, id ea
  quaerat inventore officiis tempora?` ,
        date: new Date,
        status: 'done',
        link: 'https://google.com'
      },
    ];

    this.events$ = new Observable((observer: Observer<any[]>) => {
      setTimeout(() => {
        observer.next(fakeEvents);
      }, 1000);
    });
  }

  getFeed() {
    // this.events = this.service.getFeeds();
    this.generateFakeEvent();
  }
}
