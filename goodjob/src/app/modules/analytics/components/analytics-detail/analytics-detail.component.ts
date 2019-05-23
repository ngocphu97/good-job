import { Component, OnInit } from '@angular/core';
import { ExportFileService } from '../../services/export-file.service';

@Component({
  selector: 'app-analytics-detail',
  templateUrl: './analytics-detail.component.html',
  styleUrls: ['./analytics-detail.component.scss']
})
export class AnalyticsDetailComponent implements OnInit {

  constructor(private exportFileService: ExportFileService) {
  }

  ngOnInit() {

  }

  exportChart() {
    this.exportFileService.slide11();
  }
}
