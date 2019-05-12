import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '@app/content/services/content.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  projectId = '';
  project = null;

  constructor(private route: ActivatedRoute, private contentService: ContentService) {
    this.route.params.subscribe((val) => {
      this.projectId = val.projectId;
      this.getProjectById(this.projectId);
    });
  }

  ngOnInit() {
  }

  getProjectById(projectId) {
    this.contentService.getProjectById(projectId).subscribe(res => {
      return this.project = res.result;
    });
  }
}
