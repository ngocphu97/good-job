import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-analytics-page',
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.scss']
})
export class AnalyticsPageComponent implements OnInit {

  feeds = [];

  constructor(private service: AnalyticsService) {
  }

  ngOnInit() {
    let DATA = [];
    this.getFeed().subscribe(data => {
      DATA = data;
      console.log(DATA);
    });
  }

  getFeed(): Observable<Array<any>> {
    const D = [];
    return new Observable((observer) => {
      this.service.getFeedsObservable().subscribe((feeds) => {
        this.feeds = feeds;
        // console.log('Get feeds success', this.feeds[0]);
        this.feeds.forEach(f => {
          // console.log(f.id, f.picture, f.message);
          this.service.getDataFromPostId(f.id).subscribe(e => {
            // console.log('data', e);
            const data = {
              postId: f.id,
              thumbnail: f.picture,
              content: f.message,
              reach: e.reach,
              paidReach: e.paidReach,
              organicReach: e.organicReach,
              engagement: e.engagement,
              click: e.click,
              ctr: e.ctr,
              negative: e.negative
            };
            // console.log('data', data);
            D.push(data);
          });
        });
        observer.next(D);
        observer.complete();
      },
        (error) => {
          console.log('Get Feeds Error ', error);
        }
      );
      console.log('this.DATA - page', D);
    });
  }
}
