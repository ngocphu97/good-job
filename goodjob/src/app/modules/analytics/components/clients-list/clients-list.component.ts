import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  displayedColumns: string[] = [
    'postId',
    'thumbnail',
    'content',
    'reach',
    'paidReach',
    'organicReach',
    'engagement',
    'click',
    'ctr',
    'negative'
  ];

  @Input() DATA;

  d = [
    {
      click: 0,
      content: '😈',
      ctr: 0,
      engagement: 828,
      negative: 0,
      organicReach: 74,
      paidReach: 9537,
      postId: '1415019512144250_2045258492453679',
      reach: 9611,
      thumbnail: 'h'
    },
    {
      click: 0,
      content: '😈',
      ctr: 0,
      engagement: 828,
      negative: 0,
      organicReach: 74,
      paidReach: 9537,
      postId: '1415019512144250_2045258492453679',
      reach: 9611,
      thumbnail: 'h'
    },
    {
      click: 0,
      content: '😈',
      ctr: 0,
      engagement: 828,
      negative: 0,
      organicReach: 74,
      paidReach: 9537,
      postId: '1415019512144250_2045258492453679',
      reach: 9611,
      thumbnail: 'h'
    },
    {
      click: 0,
      content: '😈',
      ctr: 0,
      engagement: 828,
      negative: 0,
      organicReach: 74,
      paidReach: 9537,
      postId: '1415019512144250_2045258492453679',
      reach: 9611,
      thumbnail: 'h'
    },
    {
      click: 0,
      content: '😈',
      ctr: 0,
      engagement: 828,
      negative: 0,
      organicReach: 74,
      paidReach: 9537,
      postId: '1415019512144250_2045258492453679',
      reach: 9611,
      thumbnail: 'h'
    },
    {
      click: 0,
      content: '😈',
      ctr: 0,
      engagement: 828,
      negative: 0,
      organicReach: 74,
      paidReach: 9537,
      postId: '1415019512144250_2045258492453679',
      reach: 9611,
      thumbnail: 'h'
    },
  ];


  constructor() {
    const dataSource = new MatTableDataSource(this.d);
  }

  ngOnInit() {
    const d1 = [
      {
        click: 0,
        content: '😈',
        ctr: 0,
        engagement: 828,
        negative: 0,
        organicReach: 74,
        paidReach: 9537,
        postId: '1415019512144250_2045258492453679',
        reach: 9611,
        thumbnail: 'h'
      },
      {
        click: 0,
        content: '😈',
        ctr: 0,
        engagement: 828,
        negative: 0,
        organicReach: 74,
        paidReach: 9537,
        postId: '1415019512144250_2045258492453679',
        reach: 9611,
        thumbnail: 'h'
      },
      {
        click: 0,
        content: '😈',
        ctr: 0,
        engagement: 828,
        negative: 0,
        organicReach: 74,
        paidReach: 9537,
        postId: '1415019512144250_2045258492453679',
        reach: 9611,
        thumbnail: 'h'
      },
      {
        click: 0,
        content: '😈',
        ctr: 0,
        engagement: 828,
        negative: 0,
        organicReach: 74,
        paidReach: 9537,
        postId: '1415019512144250_2045258492453679',
        reach: 9611,
        thumbnail: 'h'
      },
      {
        click: 0,
        content: '😈',
        ctr: 0,
        engagement: 828,
        negative: 0,
        organicReach: 74,
        paidReach: 9537,
        postId: '1415019512144250_2045258492453679',
        reach: 9611,
        thumbnail: 'h'
      },
      {
        click: 0,
        content: '😈',
        ctr: 0,
        engagement: 828,
        negative: 0,
        organicReach: 74,
        paidReach: 9537,
        postId: '1415019512144250_2045258492453679',
        reach: 9611,
        thumbnail: 'h'
      },
    ];
    this.d = d1;

  }


}
