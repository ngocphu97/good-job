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

  doughnutChartData = [];
  datasets: any[] = [
    {
      data: this.doughnutChartData,
      backgroundColor: [
        '#ffe100',
        '#8ddef1'
      ],
    }];
  colors: Array<any> = [{}];

  femaleChartData = [];
  maleChartData = [];

  doughnutChartLabels = [' MALE (%)', ' FEMALE (%)'];
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
        '#FFCE56',
        '#FFCE56',
        '#FFCE56',
        '#FFCE56',
        '#FFCE56'
      ]
    }
  ];

  barChartFemaleData: any[] = [
    {
      data: this.femaleChartData,
      label: 'Female',
      backgroundColor: [
        '#FF6384',
        '#FF6384',
        '#FF6384',
        '#FF6384',
        '#333333'
      ]
    }
  ];

  constructor(private service: AnalyticsService) { }

  ngOnInit() {
    this.service
      .getPageImpressionsByAgeGenderUnique()
      .subscribe(
        (datas) => {
          if (!datas || datas.length < 1) {
            return;
          }

          this.initDoughnutChart(datas.data);
          this.pipeData(datas.data);
          this.data$.next(datas);
        }
      );
  }

  initDoughnutChart(data) {
    const dataPipe = this.convertData(data);
    dataPipe.forEach(d => {
      const gender = d.name.split('.');
      if (gender[0] === 'M') {
        this.maleTotal = this.maleTotal + d.value;
      }
      if (gender[0] === 'F') {
        this.femaleTotal = this.femaleTotal + d.value;
      }
    });

    const total = this.maleTotal + this.femaleTotal;
    const malePersent = this.roundNumber(this.maleTotal, total);
    const femalePersent = this.roundNumber(this.femaleTotal, total);

    this.maleTotal > this.femaleTotal ? this.hightestGender = 'NAM' : this.hightestGender = 'NỮ';

    this.doughnutChartData = [malePersent, femalePersent];
  }

  pipeData(data) {
    let i = 0;
    const femaleChartData = [];
    const maleChartData = [];

    const dataPipe = this.convertData(data);

    while (i < 10) {
      if (i <= 4) {
        femaleChartData.push(this.roundNumber(dataPipe[i].value, this.femaleTotal));
      }
      if (i > 5) {
        femaleChartData.push(this.roundNumber(dataPipe[i].value, this.maleTotal));
      }
      i++;
    }
    this.femaleChartData = femaleChartData;
    this.maleChartData = maleChartData;
    this.conclusion(dataPipe);
  }

  convertData(data): any {
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

  conclusion(data: Array<any>) {
    const max = Math.max.apply(Math, data.map((d) => {
      return d.value;
    }));

    const conclusion = data.filter(x => x.value === max);
    this.hightestByAge = conclusion[0].name.split('.')[1];
  }
}
