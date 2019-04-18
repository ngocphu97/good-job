import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { BaseChartDirective } from 'ng2-charts';

import { AnalyticsService } from '../../services/analytics.service';

interface Conclusion {
  isIncreased: boolean;
  increasedValue: number;
}

@Component({
  selector: 'app-engagements',
  templateUrl: './engagements.component.html',
  styleUrls: ['./engagements.component.scss']
})
export class EngagementsComponent implements OnInit {

  data$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  @ViewChild(BaseChartDirective) engagementChart: BaseChartDirective;

  conclusion: Conclusion = {
    isIncreased: false,
    increasedValue: 0
  };

  blue = '#26eafd';
  yellow = '#ffe100';
  bgColor = [];

  engagementChartLabel = [];
  engagementData = [];
  engagementChartType = 'bar';
  barChartLegend = true;
  engagementChartData = [
    {
      data: this.engagementData,
      label: 'Page engagement',
      backgroundColor: this.bgColor
    }
  ];

  choosingDayEngagementOptions = [
    {
      optionName: 'Last 7 days',
      date_preset: 'last_7d'
    },
    {
      optionName: 'Last 30 days',
      date_preset: 'last_30d'
    },
    {
      optionName: 'Last 90 days',
      date_preset: 'last_90d'
    },
  ];

  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  constructor(private service: AnalyticsService) { }

  ngOnInit() {
    this.service.getPageEngagement('last_90d')
      .subscribe((data) => {
        if (!data || data.length < 1) {
          return;
        }
        this.updateChart(data.slice(83, 90));
        this.conclusion = this.conclude(data);
        this.data$.next(data);
      });
  }

  onSelectedTimeValue(value: string) {
    const date_preset = parseInt(value.slice(5, -1), 0);
    this.data$.subscribe(dataArray => {
      this.updateChart(dataArray.slice(90 - date_preset, 90));
    });
  }

  updateChart(engagementData) {
    this.engagementChartLabel = [];
    this.engagementData = [];

    engagementData.forEach(data => {
      this.updateLabel(data);
    });

    if (this.engagementChart && this.engagementChart.chart && this.engagementChart.chart.config) {
      this.engagementChart.chart.config.data.labels = this.engagementChartLabel;

      this.setColor(engagementData.length);
      this.engagementChart.chart.config.data.datasets[0].backgroundColor = this.bgColor;
      this.engagementChart.chart.update();
    }
  }

  updateLabel(engagementData) {
    const date = new Date(engagementData.end_time);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const label = day + '/' + month;

    this.engagementChartLabel.push(label);
    this.engagementData.push(engagementData.value);
  }

  setColor(date_preset) {
    this.bgColor = [];
    for (let i = 0; i < date_preset; i++) {
      if (i % 2 === 0) {
        this.bgColor.push(this.yellow);
      } else {
        this.bgColor.push(this.blue);
      }
    }
  }

  conclude(data): any {
    const thisMonthEngagement = data.slice(60, 90).reduce((total, initialValue) => total + initialValue.value, 0);
    const lastMonthEngagement = data.slice(30, 59).reduce((total, initialValue) => total + initialValue.value, 0);
    const compareLastMonthPercent = (thisMonthEngagement / lastMonthEngagement) * 100;

    if (compareLastMonthPercent > 100) {
      return {
        isIncreased: true,
        increasedValue: (compareLastMonthPercent - 100).toFixed(2)
      };
    } else {
      return {
        isIncreased: false,
        increasedValue: (100 - compareLastMonthPercent).toFixed(2)
      };
    }
  }
}
