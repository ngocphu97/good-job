import { Component, OnInit, ViewChild } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';
import { SourceFromFB } from '../../models/source';
import { Feed } from '../../models/feed';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

const source_from_FB: SourceFromFB[] = [
  {
    postId: '1283761982376183713',
    thumbnail: 'url()',
    content: 'hello',
    reach: 0,
    paidReach: 0,
    organicReach: 0,
    engagement: 0,
    click: 0,
    ctr: 0,
    negative: 0
  }
];

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['postId', 'thumbnail', 'content', 'reach', 'paidReach', 'organicReach', 'engagement', 'click', 'ctr', 'negative'];

  dataSource = ELEMENT_DATA;
  dataSource_post = source_from_FB;

  feeds: Feed[] = [];

  constructor(private service: AnalyticsService) {
  }

  ngOnInit() {
    this.service.getPostReach();
    // this.getFeeds();
  }

  getFeeds() {
    this.feeds = this.service.getFeeds();
    console.log('day la feed', this.feeds);
  }
}
