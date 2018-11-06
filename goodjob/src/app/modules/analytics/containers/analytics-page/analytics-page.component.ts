import { Component, OnInit, ViewChild } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-analytics-page',
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.scss']
})
export class AnalyticsPageComponent implements OnInit {

  constructor(private service: AnalyticsService) {
  }

  ngOnInit() {
  }

}
