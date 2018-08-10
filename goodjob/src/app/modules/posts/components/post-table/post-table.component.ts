import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Post } from '../../models';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {
  @Input() posts: Array<Post>;
  @Output() rowSelected = new EventEmitter();

  displayedColumns = ['id', 'title', 'actions'];
  dataSource: MatTableDataSource<Post>;

  constructor() {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Post>(this.posts);
  }

  onDeleteClicked(post) {

  }

  onRowClicked(row) {
    this.rowSelected.emit(row);
  }

}
