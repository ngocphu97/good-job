import {
  Component,
  OnInit,
  ViewChild,
  Input,
  TemplateRef,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { ContentService } from '../../services/content.service';
import { isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';

import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarMonthViewDay,
  CalendarDateFormatter,
  CalendarEventTitleFormatter
} from 'angular-calendar';

import { Client } from '../../models/client';
import { CustomDateFormatter, CustomEventTitleFormatter } from './custom-date-formatter.provider';
import { CalendarView } from 'igniteui-angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    },
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatter
    }
  ],
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private service: ContentService) {
  }

  @Input() selectedGroup: any;
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  CalendarView = CalendarView;
  view = 'month';
  viewDate: Date = new Date();
  clickedDate: Date;
  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = [];
  activeDayIsOpen = true;
  selectedDate = false;
  eventsFillter: any = [];
  connectAccount = new Array<Client>();
  showDelayTooltip = '2000';

  ngOnInit() {
    this.selectedGroup.forEach(account => {
      this.getFeedByPageId(account.name, account.id);
    });

    this.activeDayIsOpen = false;
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }) {
    body.forEach(day => {
      day.cssClass = 'custom-cell';

      const groups: any = {};
      day.events.forEach((event: CalendarEvent<{ type: string }>) => {
        groups[event.meta.type] = groups[event.meta.type] || [];
        groups[event.meta.type].push(event);
      });
      day['eventGroups'] = Object.entries(groups);
    });
  }

  getFeedByPageId(clientName, pageId) {
    setTimeout(() => {
      this.events = this.service.getFeedsByPageId(clientName, pageId);
    }, 1000);
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }) {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      this.activeDayIsOpen = false;
      this.selectedDate = true;
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
    this.eventsFillter = this.events.filter((e) => {
      return e.start.getDate() === event.start.getDate()
        && e.start.getMonth() === event.start.getMonth()
        && e.start.getFullYear() === event.start.getFullYear();
    });
  }

  changeView(view) {
    this.view = view;
  }
}
