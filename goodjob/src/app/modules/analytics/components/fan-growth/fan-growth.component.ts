import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { BehaviorSubject } from 'rxjs';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-fan-growth',
  templateUrl: './fan-growth.component.html',
  styleUrls: ['../engagements/engagements.component.scss']
})
export class FanGrowthComponent implements OnInit {

  @ViewChild(BaseChartDirective) fanGrowthChart: BaseChartDirective;
  data$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  blue = '#26eafd';
  yellow = '#ffe100';

  fanGrowthChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  fanGrowthChartLabels = [];
  fanGrowthChartData = [];
  fanGrowthChartType = 'line';
  fanGrowthChartLegend = true;

  lineChartType = 'line';

  fanGrowthChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(118,177,255,0.7)',
      borderColor: this.yellow,
      pointStyle: 'circle',
      pointHoverBackgroundColor: [],
      pointHoverBorderColor: [],
      pointBackgroundColor: [],
      pointBorderColor: [],
      pointBorderWidth: [],
      borderWidth: [],
    }
  ];

  fanGrowthData: any[] = [
    {
      data: this.fanGrowthChartData,
      label: 'Page Fans',
      colors: this.fanGrowthChartColors,
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
    data.forEach(e => {
      const date = new Date(e.end_time);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const dayLabel = day + '/' + month;

      this.fanGrowthChartLabels.push(dayLabel);
      this.fanGrowthChartData.push(e.value);
    });

    const array = data.map(x => x.value);

    const maxMinIndex = this.getArrayMinMaxIndex(array);
    this.updateChart(maxMinIndex[0], maxMinIndex[1]);
  }

  onSelectedTimeValue(value) {
    this.service.getPageFans(value).subscribe(
      (datas) => {
        if (!datas || datas.length < 1) {
          return;
        }
        this.fanGrowthChartLabels = [];
        this.fanGrowthChartData = [];

        this.pageFans(datas);
        this.data$.next(datas);
      });
  }

  updateChart(hightestPointIndex: number, lowestPointIndex: number) {
    const configChart = this.fanGrowthChart.chart.config.data.datasets[0].colors[0];
    this.fanGrowthChart.chart.config.data.labels = this.fanGrowthChartLabels;

    configChart.pointBorderColor[hightestPointIndex] = this.yellow;
    configChart.pointBorderWidth[hightestPointIndex] = 15;

    configChart.pointBorderColor[lowestPointIndex] = '#769aff';
    configChart.pointBorderWidth[lowestPointIndex] = 15;

    this.fanGrowthChart.chart.config.data.labels = this.fanGrowthChartLabels;
    this.fanGrowthChart.chart.update();
  }

  getArrayMinMaxIndex(array: Array<any>): Array<number> {
    return [
      array.findIndex(maxValue =>
        maxValue === array.reduce((a, b) => Math.max(a, b))),
      array.findIndex(minValue =>
        minValue === array.reduce((a, b) => Math.min(a, b))),
    ];
  }

}
