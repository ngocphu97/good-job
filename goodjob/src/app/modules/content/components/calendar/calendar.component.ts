import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular';
import { ContentService } from '../../services/content.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @ViewChild('calendar') public calendar: IgxCalendarComponent;

  events = [];

  constructor(
    private service: ContentService,
    private datepipe: DatePipe,
  ) { }

  ngOnInit() {
  }

  getEvents(dates: Date[]) {
    const date = this.datepipe.transform(this.calendar.value, 'MM/dd/yyy');

    this.service.getClientPostByClientDate(date).subscribe(result => {
      this.events = result;
    });
  }

}
