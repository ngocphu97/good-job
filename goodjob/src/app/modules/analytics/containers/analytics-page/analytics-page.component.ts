import { Component, OnInit, ViewChild } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-analytics-page',
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.scss']
})
export class AnalyticsPageComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  feeds = [];
  feedsLength = 0;
  DATA: Array<any> = [];
  displayedColumns: string[] = [
    // 'postId',
    // 'thumbnail',
    'content',
    'time',
    'reach',
    'paidReach',
    'organicReach',
    'engagement',
    'click',
    // 'ctr',
    'negative',
    'impressions'
  ];

  time = [
    { value: 0, viewValue: 'None' },
    { value: 7, viewValue: '7 Days' },
    { value: 30, viewValue: '30 Days' },
    { value: 90, viewValue: '90 Days' }
  ];

  selected = 0;

  temp = [];

  feeds$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  // dataSource: any;
  dataSource = new MatTableDataSource<any>();
  dataFilter = [];

  constructor(private service: AnalyticsService) {
  }

  ngOnInit() {
    this.service
      .getFeedsObservable()
      .subscribe(
        (feeds) => {
          if (!feeds || feeds.length < 1) {
            return;
          }
          feeds.forEach(f => {
            this.service
              .getDataFromPostId(f.id)
              .subscribe(e => {
                const d = {
                  postId: f.id,
                  thumbnail: f.picture,
                  content: f.message,
                  time: new Date(f.created_time),
                  reach: e.reach,
                  paidReach: e.paidReach,
                  organicReach: e.organicReach,
                  engagement: e.engagement,
                  click: e.click,
                  // ctr: e.ctr,
                  negative: e.negative,
                  impressions: e.impressions
                };

                this.temp.push(d);
                this.feeds$.next(this.temp);
                this.dataSource = new MatTableDataSource<any>(this.temp);
                this.dataFilter = this.temp;
                this.dataSource.sort = this.sort;
              });
          });
        }
      );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterDate(filterValue: any) {
    this.dataSource.data = filterValue;
  }

  onSelectedTimeValue() {
    const time = this.selected;
    const data = this.dataFilter;
    let temp = [];

    if (time === 0) {
      temp = data;
      this.applyFilterDate(temp);
    }

    // day before
    const startDate = new Date();
    const pastDate = startDate.getDate() - time;
    startDate.setDate(pastDate);

    // today
    const endDate = new Date();

    data.forEach((d, i) => {
      if (d.time.getTime() >= startDate.getTime()) {
        console.log(i);
        // console.log(d.time);
        // console.log(d.content);
        temp.push(d);
      }
    });
    this.applyFilterDate(temp);
  }
}
