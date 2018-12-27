import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getUsers() {
    console.log('connecting ...');
    this.http.get('http://localhost:3000/api/getUser').subscribe(data => {
      console.log(data);
    });
  }
}
