import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  bla: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', bla: 'bla'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', bla: 'bla'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', bla: 'bla'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', bla: 'bla'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', bla: 'bla'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', bla: 'bla'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', bla: 'bla'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', bla: 'bla'},
];

@Component({
  selector: 'app-top-projects',
  templateUrl: './top-projects.component.html',
  styleUrls: ['./top-projects.component.scss']
})
export class TopProjectsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'bla'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
