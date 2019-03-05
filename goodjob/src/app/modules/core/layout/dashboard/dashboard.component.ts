import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

declare var FB: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  login = true;
  events: string[] = [];
  opened: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onUserSelected(user: any) {
    this.router.navigate(['/analytics', user.name]);
  }

  onLogoutFB(event) {
    const router = this.router;
    FB.logout((response) => {
      console.log('You are log out');
      setTimeout(() => {
        router.navigateByUrl('/');
      }, 2000);
    });
  }
}
