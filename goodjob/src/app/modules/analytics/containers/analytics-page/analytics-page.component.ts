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
    'reach',
    'paidReach',
    'organicReach',
    'engagement',
    'click',
    // 'ctr',
    'negative',
    'impressions'
  ];

  temp = [];

  feeds$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  dataSource: any;

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
              });
          });
        }
      );
  }

  applyFilter(filterValue: string) {
    // this.feeds$.pipe(map())
    console.log(this.feeds$);
  }

}
