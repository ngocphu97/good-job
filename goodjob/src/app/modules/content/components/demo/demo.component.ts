import {
  Component,
  ChangeDetectionStrategy,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  OnInit
} from '@angular/core';
import {
  isSameDay,
  isSameMonth,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

import { Client } from '../../models/client';
import { Event } from '../../models/event';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

declare var FB: any;

@Component({
  selector: 'app-demo',
  styleUrls: ['./demo.component.scss'],
  templateUrl: './demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DemoComponent implements OnInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view = 'month';

  viewDate: Date = new Date();

  clickedDate: Date;

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen = true;

  eventsFromFB: Array<Event> = [];
  eventsFillter: any = [];
  connectAccount = new Array<Client>();
  // tslint:disable-next-line:max-line-length
  access_token = 'EAAFiVT3Gv5EBAHplRI86YNxEWkzTad5XjY9zSrGIpaqwpX43iF2RvVF82bFT4i4D0ECZAi9SgvifEfnnCg2VwcZCEKl1N5vTneIzV9RjlPFNyqA6YrboXE7lZCZAOV8SYpZA4ZAwkKImmMtIZCJmiU6X7rqCHPZAWUMbjYdqSRdGYMJ8QE2MRNrYNlsAnzWBCCZCSBKA8fePqA5BZAcJe6wCzUlvQOwwUwz04ZD';

  constructor(private modal: NgbModal) { }

  ngOnInit() {
    this.getInfo();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.clickedDate = date;
      console.log(date);
      this.eventsFillter = this.events.filter(function (e) {
        return e.start.getDate() === date.getDate()
          && e.start.getMonth() === date.getMonth()
          && e.start.getFullYear() === date.getFullYear();
      });
      console.log(this.events);
      console.log(this.eventsFillter);
    }
  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  convertDate(date: Date): string {
    const dd = date.getDate();
    const mm = date.getMonth();
    const yyyy = date.getFullYear();
    const hh = date.getHours();
    const m = date.getMinutes();
    const result = dd + ':' + mm + ':' + yyyy + ':' + '-' + hh + ':' + m;
    return result;
  }

  getInfo() {
    const token = this.access_token;
    const array = this.connectAccount;
    const eventColors = colors;
    const eventActions = this.actions;

    FB.api(`/me`, 'GET',
      {
        access_token: token,
        // tslint:disable-next-line:max-line-length
        fields: 'accounts{feed{created_time,picture.width(150).height(150),message},access_token, name, photos.width(150).height(150){picture}}'
      }, (response) => {
        const length = response.accounts.data.length;
        for (let i = 0; i < length; i++) {
          const id = response.accounts.data[i].id;
          const photo = response.accounts.data[i].photos;
          const avatar = photo.data[0].picture;
          const data = response.accounts.data[i].name;
          const access_token = response.accounts.data[i].access_token;
          const feed = response.accounts.data[i].feed;
          const client: Client = {
            id: id,
            name: data,
            image: avatar,
            access_token: access_token,
            feed: feed.data,
          };
          array.push(client);

          for (let j = 0; j < client.feed.length; j++) {
            let t = '';
            for (let k = 0; k < feed.data.length; k++) {
              t = feed.data[k].picture;
              if (t == null) {
                t = '';
              }
            }
            if (client.feed[j].message == null) {
              client.feed[j].message = 'This post has no message!!';
            }
            if (client.feed[j].message.length > 50) {
              client.feed[j].message
                = client.feed[j].message.substring(0, 50) + ' ...';
            }
            if (client.feed[j].story == null) {
              client.feed[j].story = '';
            }
            const convertDateTime = new Date(client.feed[j].created_time);
            const timeForTitle = this.convertDate(convertDateTime);
            const title = data + ' - ' + timeForTitle + ' - ' + client.feed[j].message;

            const event: CalendarEvent = {
              id: client.feed[j].id,
              start: convertDateTime,
              title: title,
              color: eventColors.red,
              actions: eventActions,
              cssClass: `my-custom-class`,
              draggable: true,
              message: client.feed[j].message,
              story: client.feed[j].story,
              clientName: data,
              thumbnail: t,
            };
            this.events.push(event);
          }
        }
        if (response.error) {
          console.log(response.error);
        }
      }
    );
  }

}
