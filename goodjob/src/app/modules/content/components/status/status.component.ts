import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { Event } from '../../models/event';
import { ContentService } from '../../services/content.service';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
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

  // events: Array<Event> = [];
  // eventsSuccess: Array<Event> = [];
  // eventsSchedule: Array<Event> = [];
  // eventsFalse: Array<Event> = [];


  events: CalendarEvent[] = [];


  constructor(private service: ContentService) { }

  ngOnInit() {
  }

  getFeed() {
    debugger;
    this.events = this.service.getFeeds();
    console.log(this.events);
  }

  // getInfo() {
  //   const token = this.access_token;
  //   const array = this.connectAccount;
  //   const events = this.events;
  //   FB.api(`/me`, 'GET',
  //     {
  //       // tslint:disable-next-line:max-line-length
  //       access_token: token,
  //    tslint:disable-next-line:max-line-length
  //       fields: 'accounts{feed{link,message,created_time,is_published,picture.width(150).height(150)},access_token, name, photos.width(150).height(150){picture}}'
  //     }, (response) => {
  //       const length = response.accounts.data.length;
  //       for (let i = 0; i < length; i++) {
  //         const id = response.accounts.data[i].id;
  //         const photo = response.accounts.data[i].photos;
  //         const avatar = photo.data[0].picture;
  //         const data = response.accounts.data[i].name;
  //         const access_token = response.accounts.data[i].access_token;
  //         const feed = response.accounts.data[i].feed;
  //         const client: Client = {
  //           id: id,
  //           name: data,
  //           image: avatar,
  //           access_token: access_token,
  //           feed: feed.data,
  //         };
  //         array.push(client);

  //         for (let j = 0; j < client.feed.length; j++) {

  //           let t = '';
  //           for (let k = 0; k < feed.data.length; k++) {
  //             t = feed.data[k].picture;
  //             if (t == null) {
  //               t = '';
  //             }
  //           }

  //           if (client.feed[j].message == null) {
  //             client.feed[j].message = 'This post has no message';
  //           }
  //           if (client.feed[j].story == null) {
  //             client.feed[j].story = '';
  //           }
  //           console.log(client.feed[j]);
  //           const converDateTime = new Date(client.feed[j].created_time);

  //           const event: Event = {
  //             id: client.feed[j].id,
  //             clientName: data,
  //             created_time: converDateTime,
  //             story: client.feed[j].story,
  //             message: client.feed[j].message,
  //             is_published: client.feed[j].is_published,
  //             link: client.feed[j].link,
  //             thumbnail: t
  //           };
  //           this.events.push(event);

  //           if (event.is_published === true) {
  //             this.eventsSuccess.push(event);
  //           }
  //           if (event.is_published === false) {
  //             this.eventsFalse.push(event);
  //           }
  //           if (event.is_published === null) {
  //             this.eventsSchedule.push(event);
  //           }
  //         }
  //       }
  //       console.log(this.events);
  //       if (response.error) {
  //         console.log(response.error);
  //       }
  //     }
  //   );
  // }

}
