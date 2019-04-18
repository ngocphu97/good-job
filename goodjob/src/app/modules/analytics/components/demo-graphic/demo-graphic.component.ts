import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { BaseChartDirective } from 'ng2-charts';

import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-demo-graphic',
  templateUrl: './demo-graphic.component.html',
  styleUrls: ['./demo-graphic.component.scss']
})
export class DemoGraphicComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  data$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  hightestGender = '';
  maleTotal = 0;
  femaleTotal = 0;
  hightestByAge = '';
  malePercent = 0;
  femalePercent = 0;

  doughnutChartData = [];
  datasets: any[] = [
    {
      data: this.doughnutChartData,
      backgroundColor: [
        '#ffe100',
        '#769aff'
      ],
    }];
  colors: Array<any> = [{}];

  femaleChartData = [];
  maleChartData = [];

  doughnutChartLabels = [' FEMALE (%)', ' MALE (%)'];
  doughnutChartType = 'doughnut';
  barChartType = 'horizontalBar';

  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  barChartLabels = [
    '13 - 17',
    '18 - 24',
    '25 - 34',
    '35 - 44',
    '45 - 54',
  ];

  barChartLegend = true;

  barChartMaleData: any[] = [
    {
      data: this.maleChartData,
      label: 'Male',
      backgroundColor: [
        '#ffe100',
        '#769aff',
        '#ffe100',
        '#769aff',
        '#ffe100',
      ]
    }
  ];

  barChartFemaleData: any[] = [
    {
      data: this.femaleChartData,
      label: 'Female By Age',
      backgroundColor: [
        '#ffe100',
        '#769aff',
        '#ffe100',
        '#769aff',
        '#ffe100',
      ]
    }
  ];

  constructor(private service: AnalyticsService) { }

  ngOnInit() {
    this.service
      .getPageImpressionsByAgeGenderUnique().subscribe((demoGraphicData) => {
        if (!demoGraphicData || demoGraphicData.length < 1) {
          return;
        }

        this.initDemoGraphicChart(demoGraphicData.data);
        this.pipeData(demoGraphicData.data);
        this.data$.next(demoGraphicData);
      });
  }

  initDemoGraphicChart(demoGraphicData: Array<any>) {
    const convertedData = this.convertData(demoGraphicData);
    convertedData.forEach((data: any) => {
      const gender = data.name.split('.');
      if (gender[0] === 'M') {
        this.maleTotal = this.maleTotal + data.value;
      }
      if (gender[0] === 'F') {
        this.femaleTotal = this.femaleTotal + data.value;
      }
    });

    const total = this.maleTotal + this.femaleTotal;
    this.malePercent = this.roundNumber(this.maleTotal, total);
    this.femalePercent = this.roundNumber(this.femaleTotal, total);

    this.maleTotal > this.femaleTotal ? this.hightestGender = 'MEN' : this.hightestGender = 'WOMEN';

    this.doughnutChartData = [this.femalePercent, this.malePercent];
  }

  pipeData(data: Array<any>): void {
    let i = 0;
    this.femaleChartData = [];
    this.maleChartData = [];
    const convertedData = this.convertData(data);
    this.conclusion(convertedData);
    while (i < 10) {
      if (i <= 4) {
        this.femaleChartData.push(this.roundNumber(convertedData[i].value, this.femaleTotal));
      }
      if (i > 5) {
        this.femaleChartData.push(this.roundNumber(convertedData[i].value, this.maleTotal));
      }
      i++;
    }
  }

  convertData(data: Array<any>): Array<any> {
    return Object.keys(data).map((k) => {
      return {
        name: k,
        value: data[k]
      };
    });
  }

  roundNumber(number: number, total: number): number {
    return Math.round((number / total * 100) * 100) / 100;
  }

  conclusion(data: Array<any>): void {
    console.log(data);
    const max = Math.max.apply(Math, data.map((d) => d.value));

    const conclusion = data.filter(x => x.value === max);
    console.log(conclusion);
    this.hightestByAge = conclusion[0].name.split('.')[1];
  }
}
