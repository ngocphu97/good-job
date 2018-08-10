import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

import { PeriodicElement } from '../../models/client.model';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  client_post: Array<PeriodicElement>;

  displayedColumns: string[] = [
    'Post ID',
    'Post',
    'Impressions',
    'Engagement',
    'Clicks',
    'Paid reach',
    'Organic reach'
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(this.client_post);

  myControl = new FormControl();
  options: PeriodicElement[] = this.client_post;
  filteredOptions: Observable<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: AnalyticsService) {
    this.getClientPost();
    console.log(this.dataSource);
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.client_post);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | PeriodicElement>(''),
        map(value => typeof value === 'string' ? value : value.date),
        map(date => date ? this._filter(date) : this.options.slice())
      );
  }

  getClientPost() {
    this.service.getClientPost().subscribe(data => {

      this.client_post = data;
      console.log(this.client_post);
    });
  }

  private _filter(value: string): PeriodicElement[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.post.toLowerCase().includes(filterValue));
  }

  displayFn(date?: PeriodicElement): string | undefined {
    return date ? date.date : undefined;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTotalImpressions() {
    return this.client_post.map(t => t.impressions).reduce((acc, value) => acc + value, 0);
  }

  getTotalEngagement() {
    return this.client_post.map(t => t.engagement).reduce((acc, value) => acc + value, 0);
  }

  getTotalClicks() {
    return this.client_post.map(t => t.clicks).reduce((acc, value) => acc + value, 0);
  }

  getTotalPaidReach() {
    return this.client_post.map(t => t.paidReach).reduce((acc, value) => acc + value, 0);
  }

  getTotalOrganicReach() {
    return this.client_post.map(t => t.organicReach).reduce((acc, value) => acc + value, 0);
  }
}
