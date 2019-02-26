import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'app-preview-post',
  templateUrl: './preview-post.component.html',
  styleUrls: ['./preview-post.component.scss']
})
export class PreviewPostComponent implements OnInit {

  panelOpenState = true;
  expand = true;

  @ViewChild('myaccordion') myPanels: MatAccordion;

  @Input() events: any;

  constructor() { }

  ngOnInit() {
    this.openAll();
  }

  openAll() {
    this.myPanels.openAll();
  }

}
