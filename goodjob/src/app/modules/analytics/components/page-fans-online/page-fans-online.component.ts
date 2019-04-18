import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { BaseChartDirective, Color } from 'ng2-charts';

import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-page-fans-online',
  templateUrl: './page-fans-online.component.html',
  styleUrls: ['../engagements/engagements.component.scss']
})
export class PageFansOnlineComponent implements OnInit {

  @ViewChild(BaseChartDirective) pageFansChart: BaseChartDirective;
  @ViewChild('canvas') canvas: ElementRef;
  data$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  blue = '#26eafd';
  yellow = '#ffe100';

  pageFanChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    fill: true,
  };

  pageFanChartLegend = true;
  pageFanChartType = 'line';

  pageFanChartLabels = [];
  pageFanChartData = [];

  pageFansChartColors: Color[] = [
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


  pageFansDataset: Array<any> = [
    {
      data: this.pageFanChartData,
      label: 'Fans Online Time',
      colors: this.pageFansChartColors,
    }
  ];

  choosingDayEngagementOptions = [
    {
      optionName: '',
      date_preset: ''
    },
  ];

  constructor(private service: AnalyticsService) { }

  ngOnInit() {
    this.service.getPageFansOnline().subscribe((data) => {
      if (!data || data.length < 1) {
        return;
      }
      this.createDateOptions(data);
      this.pageFansOnlineData(data[0]);
      this.data$.next(data);
    });
  }

  createDateOptions(pageFansData: any): void {
    pageFansData.forEach(data => {
      const date = new Date(data.end_time);
      const day = date.getDate();
      const dateInWeek = date.getDay();
      const month = date.getMonth() + 1;

      const dateInWeekString = this.convertDate(dateInWeek);
      const dayLabel = dateInWeekString + ' - ' + day + '/' + month;

      const option = {
        date_preset: data.end_time.toString(),
        optionName: dayLabel
      };

      this.choosingDayEngagementOptions.push(option);
    });
  }

  pageFansOnlineData(pageFansData: any): void {
    const convertedData = this.convertData(pageFansData);

    convertedData.forEach(d => {
      this.pageFanChartLabels.push(d.hour);
      this.pageFanChartData.push(d.value);
    });

    this.getArrayMinMaxIndex(this.pageFanChartData);
    const maxMinIndex = this.getArrayMinMaxIndex(this.pageFanChartData);
    this.updateChart(maxMinIndex[0], maxMinIndex[1]);
  }

  onSelectedTimeValue(selectedTimeValue: Date): void {
    this.data$.subscribe((data) => {
      const filteredData = data.filter(d => d.end_time === selectedTimeValue);

      const convertedData = Object.keys(filteredData[0].value).map((key) => filteredData[0].value[key]);
      this.pageFanChartData = convertedData;

      this.getArrayMinMaxIndex(this.pageFanChartData);
      const maxMinIndex = this.getArrayMinMaxIndex(this.pageFanChartData);
      this.updateChart(maxMinIndex[0], maxMinIndex[1]);
    });
  }

  updateChart(hightestPointIndex: number, lowestPointIndex: number): void {

    const configChart = this.pageFansChart.chart.config.data.datasets[0].colors[0];
    this.pageFansChart.chart.config.data.labels = this.pageFanChartLabels;

    configChart.pointBorderColor[hightestPointIndex] = this.yellow;
    configChart.pointBorderWidth[hightestPointIndex] = 15;

    configChart.pointBorderColor[lowestPointIndex] = '#769aff';
    configChart.pointBorderWidth[lowestPointIndex] = 15;

    this.pageFansChart.chart.update();
  }

  getArrayMinMaxIndex(array: Array<any>): Array<number> {
    return [
      array.findIndex(maxValue =>
        maxValue === array.reduce((a, b) => Math.max(a, b))),
      array.findIndex(minValue =>
        minValue === array.reduce((a, b) => Math.min(a, b))),
    ];
  }

  convertData(data): Array<any> {
    return Object.keys(data.value).map((key) => {
      return {
        hour: key,
        value: data.value[key]
      };
    });
  }

  convertDate(day): string {
    switch (day) {
      case 0:
        return 'Chủ nhật';
      case 1:
        return 'Thứ 2';
      case 2:
        return 'Thứ 3';
      case 3:
        return 'Thứ 4';
      case 4:
        return 'Thứ 5';
      case 5:
        return 'Thứ 6';
      case 6:
        return 'Thứ 7';
    }
    return '';
  }
}
