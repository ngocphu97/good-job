import { Component, OnInit, ViewChild } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';
import { MatTableDataSource, MatSort } from '@angular/material';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

import { AnalyticsService } from '../../services/analytics.service';


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  EXCEL_EXTENSION = '.xlsx';

  feeds = [];
  feedsLength = 0;
  DATA: Array<any> = [];
  displayedColumns: string[] = [
    // 'postId',
    // 'thumbnail',
    'content',
    'time',
    'reach',
    'paidReach',
    'organicReach',
    'engagement',
    'click',
    // 'ctr',
    'negative',
    'impressions'
  ];

  time = [
    { value: 0, viewValue: 'All' },
    { value: 7, viewValue: '7 Days' },
    { value: 30, viewValue: '30 Days' },
    { value: 90, viewValue: '90 Days' }
  ];

  selected = 0;

  temp = [];

  feeds$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  // dataSource: any;
  dataSource = new MatTableDataSource<any>();
  dataFilter = [];

  x: any;

  constructor(private service: AnalyticsService) {
  }

  ngOnInit() {

    this.service.getFeedsObservable()
      .subscribe((feeds) => {
        if (!feeds || feeds.length < 1) {
          return;
        }
        feeds.forEach(f => {
          this.service.getDataFromPostId(f.id)
            .subscribe(e => {
              const d = {
                postId: f.id,
                thumbnail: f.picture,
                content: f.message,
                time: new Date(f.created_time),
                reach: e.reach,
                paidReach: e.paidReach,
                organicReach: e.organicReach,
                engagement: e.engagement,
                click: e.click,
                // ctr: e.ctr,
                negative: e.negative,
                impressions: e.impressions
              };

              this.temp.push(d);
              this.x = this.temp;

              // this.feeds$.next(this.temp);

              this.dataSource = new MatTableDataSource<any>(this.temp);
              this.dataFilter = this.temp;
              this.dataSource.sort = this.sort;
            });
        });
      }
      );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterDate(filterValue: any) {
    this.dataSource.data = filterValue;
  }

  onSelectedTimeValue(event) {
    const time = this.selected;
    const data = this.dataFilter;
    let temp = [];

    if (time === 0) {
      temp = data;
      this.applyFilterDate(temp);
    }

    // day before
    const startDate = new Date();
    const pastDate = startDate.getDate() - time;
    startDate.setDate(pastDate);

    // today
    const endDate = new Date();

    data.forEach((d, i) => {
      if (d.time.getTime() >= startDate.getTime()) {
        temp.push(d);
      }
    });
    this.applyFilterDate(temp);
  }

  exportAsExcelFile(json: any[]): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    worksheet.cols = [100];
    const workbook: XLSX.WorkBook = {
      Sheets: {
        'data': worksheet
      },
      SheetNames: ['data']
    };

    const writtingOptions: XLSX.WritingOptions = {
      bookType: 'xlsx',
      type: 'array',
      Props: {
        Title: 'leuelu'
      }
    };

    const excelBuffer: any = XLSX.write(workbook, writtingOptions);

    this.saveAsExcelFile(excelBuffer);
  }

  saveAsExcelFile(buffer: any): void {
    const data: Blob = new Blob([buffer], { type: this.EXCEL_TYPE });
    FileSaver.saveAs(data, 'gudpost' + '_export' + this.EXCEL_EXTENSION);
  }

  exportAsXLSX() {
    this.exportAsExcelFile(this.temp);
  }
}
