import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

declare var FB: any;

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Output() logoutSignal = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelectAnalytics() {
    this.router.navigate(['/analytics']);
  }

  logoutWithFb() {
    this.logoutSignal.emit();
  }

}
