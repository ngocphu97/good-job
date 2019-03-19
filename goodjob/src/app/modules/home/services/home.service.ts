import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  projects = [
    {
      name: 'Dove Project',
      avatar: 'https://www.dove.com/content/dam/unilever/dove/global/Dove.png',
      fanpages: [
        {
          id: 'dove1',
          name: 'DOVE VIET NAM',
          avatar: 'https://www.elle.vn/wp-content/uploads/2013/05/24/Screen-Shot-2013-08-21-at-5.19.37-PM.png'
        },
        {
          id: 'dove2',
          name: 'DOVE SAI GON',
          avatar: 'https://cdn.vatgia.vn/pictures/fullsize/2018/03/15/vms1521111090.png'
        },
      ]
    }
  ];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    // return this.http.get('http://localhost:3000/api/getUser');
    return new Observable((observer: Observer<any[]>) => {
      setTimeout(() => {
        observer.next(this.projects);
      }, 500);
    });
  }
}
