import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  loading = true;
  defaultImg = 'https://loading.io/spinners/dual-ring/lg.dual-ring-loader.gif';

  constructor(private service: HomeService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers();
  }

  onLoadingImg() {
    setTimeout(() => {
      this.defaultImg = 'https://www.altitudeadventure.co.uk/wp-content/uploads/2016/05/new-sites-coming-soon-banner.png';
      this.loading = false;
    }, 1500);
  }
}
