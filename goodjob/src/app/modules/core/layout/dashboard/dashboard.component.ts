import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '@app/core/services/navigate/model/user.model';
import { NavigateService } from '@app/core/services';
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

  onUserSelected(user: User) {
    this.router.navigate(['/analytics', user.name]);
  }

  onLogoutFB() {
    const router = this.router;
    FB.logout((response) => {
      console.log('You are log out');
      setTimeout(() => {
        router.navigateByUrl('/');
      }, 2000);
    });
  }
}
