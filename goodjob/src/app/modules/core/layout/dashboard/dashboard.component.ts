import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '@app/core/services/navigate/model/user.model';
import { NavigateService } from '@app/core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  events: string[] = [];
  opened: boolean;

  constructor(private navigateService: NavigateService, private router: Router) { }

  ngOnInit() {
  }

  onUserSelected(user: User) {
    this.router.navigate(['/analytics', user.name]);
    console.log(user);
  }

}
