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

  temp: any;
  hightestFansCity = '';
  hightestPercentFansCity = 0;
  displayedColumns = ['city', 'fan', 'percent'];
  dataSource = new MatTableDataSource<any>();

  colors: Array<any> = [{}];

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
      .getPageFansCity()
      .subscribe(
        (data) => {
          if (!data || data.length < 1) {
            return;
          }
          this.fansByCity(data);
          this.dataSource.sort = this.sort;
          this.data$.next(data);
        });

    this.service
      .getPageFans('last_90d')
      .subscribe(
        (data) => {
          if (!data || data.length < 1) {
            return;
          }
        });
  }

  fansByCity(data) {
    const fansByCityTemp = Object.keys(data)
      .map(function (t) {
        return {
          name: t,
          value: data[t]
        };
      });

    let totalFans = 0;
    fansByCityTemp.forEach(f => {
      totalFans = totalFans + f.value;
    });

    const fansByCity = Object.keys(data)
      .map(function (d) {
        return {
          name: d,
          value: data[d],
          percent: Math.round((data[d] / totalFans * 100) * 100) / 100
        };
      });

    let conclusion = {
      name: '',
      percent: 0
    };

    fansByCity.forEach(f => {
      if (f.percent > conclusion.percent) {
        conclusion = f;
      }
    });

    this.hightestFansCity = conclusion.name;
    this.hightestPercentFansCity = conclusion.percent;


    this.dataSource = new MatTableDataSource<any>(fansByCity);
  }

}
