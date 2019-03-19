import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';

import {
  CalendarEvent
} from 'angular-calendar';
import { Observable, Observer } from 'rxjs';
import { filter } from 'rxjs/operators';

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
  eventsScheduled$: Observable<any>;
  eventsFail$: Observable<any>;
  eventsDone$: Observable<any>;

  fakeEvents = [
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
      status: 'scheduled',
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
      status: 'fail',
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
      status: 'fail',
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


  constructor(private service: ContentService) { }

  ngOnInit() {
    this.getFeed();
  }

  generateFakeEvent() {
    this.events$ = new Observable((observer: Observer<any[]>) => {
      setTimeout(() => {
        observer.next(this.fakeEvents);
      }, 1000);
    });

    this.eventsDone$ = new Observable((observer: Observer<any[]>) => {
      setTimeout(() => {
        observer.next(this.fakeEvents.filter(d => d.status === 'done'));
      }, 1000);
    });

    this.eventsScheduled$ = new Observable((observer: Observer<any[]>) => {
      setTimeout(() => {
        observer.next(this.fakeEvents.filter(d => d.status === 'scheduled'));
      }, 1000);
    });

    this.eventsFail$ = new Observable((observer: Observer<any[]>) => {
      setTimeout(() => {
        observer.next(this.fakeEvents.filter(d => d.status === 'fail'));
      }, 1000);
    });
  }

  getFeed() {
    this.generateFakeEvent();
  }

  onSort() {
    const newArray = this.fakeEvents.sort(this.compareValues('status'));
    this.events$ = new Observable((observer: Observer<any[]>) => {
      observer.next(newArray);
    });
  }

  compareValues(key, order = 'asc') {
    return (a, b) => {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = (typeof a[key] === 'string') ?
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?
        b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        return comparison = 1;
      } else if (varA < varB) {
        return comparison = -1;
      }
    };
  }
}
