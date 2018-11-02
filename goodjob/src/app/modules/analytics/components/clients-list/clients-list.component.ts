import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';
import { Observable } from 'rxjs';
import { SourceFromFB } from '../../models/source';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  displayedColumns: string[] = [
    'postId',
    // 'thumbnail',
    // 'content',
    // 'reach',
    // 'paidReach',
    // 'organicReach',
    // 'engagement',
    // 'click',
    // 'ctr',
    // 'negative'
  ];

  @Input() data: Array<any>;
  dataSource: MatTableDataSource<SourceFromFB>;

  constructor(private service: AnalyticsService) {
  }

  ngOnInit() {
    // this.dataSource = new MatTableDataSource<SourceFromFB>(this.data);
    console.log('data - list', this.data);
  }
}
