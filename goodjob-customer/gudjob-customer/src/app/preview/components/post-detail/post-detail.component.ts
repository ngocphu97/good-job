import { Component, OnInit } from '@angular/core';
import { PreviewService } from '../../service/preview.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private service: PreviewService) { }

  ngOnInit() {
  }

  getPostById(id) {
    this.service.getPostById(id);
  }

}
