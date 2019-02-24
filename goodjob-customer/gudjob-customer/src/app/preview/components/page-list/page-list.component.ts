import { Component, OnInit } from '@angular/core';
import { PreviewService } from '../../service/preview.service';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  userId: any;
  userConnectPages = [];

  constructor(private service: PreviewService) { }

  ngOnInit() {
  }

  getPageList() {
    this.service.getUserConnectPage(1)
      .subscribe(data => {
        data.filter(d => d.id === 1);
        console.log(data);
      });
  }

}
