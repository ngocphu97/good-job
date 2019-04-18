import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-fan-by-city',
  templateUrl: './fan-by-city.component.html',
  styleUrls: ['./fan-by-city.component.scss']
})
export class FanByCityComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  displayedColumns: string[] = ['city', 'fans'];
  dataSource = new MatTableDataSource();

  constructor(private service: AnalyticsService) { }

  ngOnInit() {
    this.service.getPageFansCity().subscribe((data) => {
      if (!data || data.length < 1) {
        return;
      }
      this.initTableData(data);
      this.data$.next(data);
    });
  }

  initTableData(data) {
    const convertedData = this.convertData(data);
    console.log(convertedData);
    this.dataSource = new MatTableDataSource(convertedData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  convertData(data) {
    const convertedData = Object.keys(data).map((k) => {
      return {
        city: k,
        fans: data[k],
      };
    });

    return convertedData;
  }
}
