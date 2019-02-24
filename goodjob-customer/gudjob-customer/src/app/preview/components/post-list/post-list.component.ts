import { Component, OnInit, HostListener } from '@angular/core';
import { MdbTableService } from 'angular-bootstrap-md';
import { PreviewService } from '../../service/preview.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  elements: any = [];
  headElements = ['Post ID', 'Thumbnail', 'Content', 'Time', 'Action'];

  searchText = '';
  previous: string;

  constructor(
    private tableService: MdbTableService,
    private service: PreviewService
  ) { }

  @HostListener('input') oninput() {
    this.searchItems();
  }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.getPostListByPageId('123');

    this.tableService.setDataSource(this.elements);
    this.elements = this.tableService.getDataSource();
    this.previous = this.tableService.getDataSource();
  }

  // init data
  getPostListByPageId(pageId) {
    this.service.getPostPendingByPageId(123)
      .subscribe(data => {
        for (let i = 0; i < data.length; i++) {
          this.elements.push(
            {
              id: data[i]._id.toString(),
              thumbnail: 'https://img.freepik.com/free-vector/cute-animal-doing-dabbing_23-2147847948.jpg?size=338&ext=jpg',
              content: data[i].name,
              time: data[i].Created_date
            }
          );
        }
      });

  }

  searchItems() {
    const prev = this.tableService.getDataSource();

    if (!this.searchText) {
      this.tableService.setDataSource(this.previous);
      this.elements = this.tableService.getDataSource();
    }

    this.elements = prev.filter(item => item.content.includes(this.searchText));
    this.tableService.setDataSource(prev);

    // if (this.searchText) {
    //   this.elements = this.tableService.searchDataObservable(this.searchText).subscribe(data => {
    //     console.log(data);
    //   });
    // this.tableService.setDataSource(prev);
  }

  testConnectPost() {
    console.log('here');
    this.service.testConnectPost()
      .subscribe(res => console.log(res));
  }

}
