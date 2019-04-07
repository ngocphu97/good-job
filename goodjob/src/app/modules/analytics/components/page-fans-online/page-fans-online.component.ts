import { Component, OnInit, ViewChild } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';
import { BehaviorSubject } from 'rxjs';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-page-fans-online',
  templateUrl: './page-fans-online.component.html',
  styleUrls: ['./page-fans-online.component.scss']
})
export class PageFansOnlineComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  data$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  dataFromFB: any;

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
      label: 'Page Fans Online Time'
    }
  ];

  lineChartColors: Array<any> = [
    {
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
      optionName: '',
      date_preset: ''
    },
  ];
  selected: any;

  constructor(private service: AnalyticsService) { }

  ngOnInit() {
    this.service
      .getPageFansOnline()
      .subscribe(
        (datas) => {
          if (!datas || datas.length < 1) {
            return;
          }
          this.dataFromFB = datas;
          this.pageFansOnlineDate(datas);
          this.pageFansOnlineData(datas[0]);
          this.data$.next(datas);
        }
      );
  }

  pageFansOnlineDate(data) {
    data.pop(data[6]);
    data.forEach(d => {

    const date = new Date(d.end_time);
    const day = date.getDate();
    const dateInWeek = date.getDay();
    const dateInWeekString = this.pipeDay(dateInWeek);

    const month = date.getMonth() + 1;
    const dayLabel = dateInWeekString + ' - ' + day + '/' + month;

    const option = {
      date_preset: d.end_time,
      optionName: dayLabel
    };

    this.choosingDayEngagementOptions.push(option);
  });
}


pageFansOnlineData(data) {
  const valueBefore = data.value;
  const dataPipe = Object.keys(valueBefore)
    .map(function (k) {
      return {
        hour: k,
        value: valueBefore[k]
      };
    });

  dataPipe.forEach(d => {
    this.barChartLabels.push(d.hour);
    this.pageFansData.push(d.value);
  });

  setTimeout(() => {
    if (this.chart && this.chart.chart && this.chart.chart.config) {
      this.chart.chart.config.data.labels = this.barChartLabels;
      this.chart.chart.update();
    }
  });
}

pipeDay(day): string {
  let date = '';
  switch (day) {
    case 0:
      date = 'Chủ nhật';
      break;
    case 1:
      date = 'Thứ 2';
      break;
    case 2:
      date = 'Thứ 3';
      break;
    case 3:
      date = 'Thứ 4';
      break;
    case 4:
      date = 'Thứ 5';
      break;
    case 5:
      date = 'Thứ 6';
      break;
    case 6:
      date = 'Thứ 7';
  }
  return date;
}

onSelectedTimeValue(value) {
  const cloneData = [];
  this.pageFansData = cloneData;

  this.dataFromFB.forEach(d => {
    if (d.end_time === value) {
      const valueBefore = d.value;
      const dataPipe = Object.keys(valueBefore)
        .map(function (k) {
          return {
            hour: k,
            value: valueBefore[k]
          };
        });

      dataPipe.forEach(d1 => {
        this.pageFansData.push(d1.value);
      });
    }
  });

  setTimeout(() => {
    if (this.chart && this.chart.chart && this.chart.chart.config) {
      this.chart.chart.config.data.labels = this.barChartLabels;
      this.chart.chart.update();
    }
  });

}
}
