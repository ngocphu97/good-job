import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      name: 'Dove Project',
      thumnail: 'https://www.unilever.com/Images/dove_tcm244-408752.png',
      pages: [
        {
          name: 'Dove page 1',
          thumnail: 'https://www.unilever.com/Images/dove_tcm244-408752.png'
        },
        {
          name: 'Dove page 2',
          thumnail: 'https://www.coopathome.ch/img/produkte/300_300/RGB/3372838_001.jpg?_=1534148101968'
        }
      ]
    },
    {
      name: 'Bistis Project',
      thumnail: 'https://media.static-adayroi.com/240_346/90/h33/h4e/15383468965918.jpg',
      pages: [
        {
          name: 'Bitis page 1',
          thumnail: 'https://media.static-adayroi.com/240_346/90/h33/h4e/15383468965918.jpg'
        },
        {
          name: 'Bitis page 2',
          thumnail: 'https://media.static-adayroi.com/240_346/90/h4a/hd0/11465250537502.jpg'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
