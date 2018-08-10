import { Component, OnInit } from '@angular/core';
import { WellcomeService } from '../../service/wellcome.service';

@Component({
  selector: 'app-total-data',
  templateUrl: './total-data.component.html',
  styleUrls: ['./total-data.component.scss']
})
export class TotalDataComponent implements OnInit {

  totalImpression = 0;
  totalEngagement = 0;
  totalClicks = 0;
  avgPaidReach = 0;
  avgOrganicReach = 0;

  constructor(private service: WellcomeService) { }

  ngOnInit() {
    this.getTotalImpression();
    this.getTotalEngagement();
    this.getTotalClicks();
    this.getAvgPaidReach();
    this.getAvgOrganicReach();
  }

  getTotalImpression() {
    this.service.getClientPost().subscribe((data) => {
      data.forEach(item => {
        this.totalImpression = this.totalImpression + item.impressions;
      });
      return this.totalImpression;
    });
  }
  getTotalEngagement() {
    this.service.getClientPost().subscribe((data) => {
      data.forEach(item => {
        this.totalEngagement = this.totalEngagement + item.engagement;
      });
      return this.totalEngagement;
    });
  }
  getTotalClicks() {
    this.service.getClientPost().subscribe((data) => {
      data.forEach(item => {
        this.totalClicks = this.totalClicks + item.clicks;
      });
      return this.totalClicks;
    });
  }
  getAvgPaidReach() {
    this.service.getClientPost().subscribe((data) => {
      data.forEach(item => {
        this.avgPaidReach = this.avgPaidReach + item.padiRech;
      });
      return this.avgPaidReach;
    });
  }
  getAvgOrganicReach() {
    this.service.getClientPost().subscribe((data) => {
      data.forEach(item => {
        this.avgOrganicReach = this.avgOrganicReach + item.organicReach;
      });
      return this.avgOrganicReach;
    });
  }


}
