import { Component, OnInit, ViewChild, Input, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContentService } from '../../services/content.service';
import { isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarMonthViewDay, CalendarDateFormatter } from 'angular-calendar';

import { Client } from '../../models/client';
import { CustomDateFormatter } from './custom-date-formatter.provider';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ],
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private modal: NgbModal, private http: HttpClient, private service: ContentService) {
  }

  @Input() selectedGroup: any;
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view = 'month';
  viewDate: Date = new Date();
  clickedDate: Date;
  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = [];
  activeDayIsOpen = true;
  eventsFillter: any = [];
  connectAccount = new Array<Client>();
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  showDelayTooltip = '2000';

  ngOnInit() {
    this.getFeeds();
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }) {
    body.forEach(day => {
      day.cssClass = 'custom-cell';
    });
  }

  getFeeds() {
    setTimeout(() => {
      this.selectedGroup.clients.forEach(c => {
        this.events = this.service.getFeedsByPageAccessToken(c.name, c.access_token);
      });
    }, 1000);
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }) {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      this.activeDayIsOpen = false;
      this.clickedDate = date;
      this.eventsFillter = this.events.filter((e) => {
        return e.start.getDate() === date.getDate()
          && e.start.getMonth() === date.getMonth()
          && e.start.getFullYear() === date.getFullYear();
      });
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
}
