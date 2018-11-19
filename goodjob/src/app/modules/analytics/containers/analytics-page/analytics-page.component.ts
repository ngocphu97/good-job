import { Component, OnInit, ViewChild } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';
import { BehaviorSubject } from 'rxjs';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-analytics-page',
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.scss']
})
export class AnalyticsPageComponent implements OnInit {
  temp: any;
  data$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);



  constructor(private service: AnalyticsService) {
  }

  ngOnInit() {
  }

}
