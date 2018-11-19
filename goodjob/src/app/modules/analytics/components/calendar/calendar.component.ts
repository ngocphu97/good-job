import { Component, OnInit, ViewChild } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';
import { BehaviorSubject } from 'rxjs';
import { MatSort, MatTableDataSource } from '@angular/material';
import { BaseChartDirective } from 'ng2-charts/charts/charts';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  data$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  barChartLabels = [];
  pageFansData = [];
  barChartType = 'bar';
  lineChartLegend = true;
  lineChartType = 'line';

  barChartData: any[] = [
    {
      data: this.pageFansData,
      label: 'Page Fans'
    }
  ];

  lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  choosingDayEngagementOptions = [
    {
      optionName: 'None',
      date_preset: 'last_7d'
    },
    {
      optionName: '7 Ngày',
      date_preset: 'last_7d'
    },
    {
      optionName: '30 Ngày',
      date_preset: 'last_30d'
    },
    {
      optionName: '90 Ngày',
      date_preset: 'last_90d'
    },
  ];
  selected: any;

  constructor(private service: AnalyticsService) { }

  ngOnInit() {
    this.service
      .getPageFans('last_90d')
      .subscribe(
        (datas) => {
          if (!datas || datas.length < 1) {
            return;
          }

          this.pageFans(datas);
          this.data$.next(datas);
        }
      );
  }

  pageFans(data) {
    console.log(data);
    data.forEach(e => {
      const date = new Date(e.end_time);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const dayLabel = day + '/' + month;

      console.log(dayLabel);

      this.barChartLabels.push(dayLabel);
      this.pageFansData.push(e.value);
    });

    setTimeout(() => {
      if (this.chart && this.chart.chart && this.chart.chart.config) {
        this.chart.chart.config.data.labels = this.barChartLabels;
        this.chart.chart.update();
      }
    });
  }

  onSelectedTimeValue(value) {

    this.service.getPageFans(value)
      .subscribe(
        (datas) => {
          if (!datas || datas.length < 1) {
            return;
          }

          const cloneData = [];
          const cloneLabel = [];
          this.barChartLabels = cloneLabel;
          this.pageFansData = cloneData;

          this.pageFans(datas);
          this.data$.next(datas);
        }
      );
  }


  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }



}
