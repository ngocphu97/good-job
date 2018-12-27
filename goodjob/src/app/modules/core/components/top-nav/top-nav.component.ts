import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelectAnalytics() {
    this.router.navigate(['/analytics']);
  }

}
