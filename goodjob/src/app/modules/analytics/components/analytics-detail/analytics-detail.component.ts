import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSort, MatTableDataSource } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

import { BaseChartDirective } from 'ng2-charts/charts/charts';

import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-analytics-detail',
  templateUrl: './analytics-detail.component.html',
  styleUrls: ['./analytics-detail.component.scss']
})
export class AnalyticsDetailComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  data$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  // page Fans
  barChartLabelsPageFans = [];
  pageFansData = [];

  barChartDataPageFans: any[] = [
    {
      data: this.pageFansData,
      label: 'Page Fans'
    }
  ];

  constructor(private service: AnalyticsService) {
  }

  ngOnInit() {

    this.service
      .getPageFans('last_90d')
      .subscribe(
        (data) => {
          if (!data || data.length < 1) {
            return;
          }

          // console.log(data);
        });
  }
}
