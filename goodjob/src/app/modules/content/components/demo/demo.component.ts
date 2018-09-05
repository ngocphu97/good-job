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
import { ContentService } from '../../services/content.service';

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

  constructor(private modal: NgbModal, private service: ContentService) { }

  ngOnInit() {
    this.getFeeds();
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


  getFeeds() {
    this.events = this.service.getFeeds();
  }

}
