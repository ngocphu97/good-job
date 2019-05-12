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
      members: [
        {
          email: 'Shanna@melissa.tv',
          id: '2',
          name: 'Ervin Howell',
          role: 'admin',
          username: 'Antonette'
        }
      ],
      connectAccounts: [
        {
          id: 'dove1',
          name: 'DOVE VIET NAM',
          thumbnail: 'https://www.elle.vn/wp-content/uploads/2013/05/24/Screen-Shot-2013-08-21-at-5.19.37-PM.png'
        },
        {
          id: 'dove2',
          name: 'DOVE SAI GON',
          thumbnail: 'https://cdn.vatgia.vn/pictures/fullsize/2018/03/15/vms1521111090.png'
        },
      ]
    }
  ];

  constructor(private http: HttpClient) { }

  getProjectList(): Observable<any> {
    return new Observable((observer: Observer<any[]>) => {
      observer.next(this.projects);
    });
  }
}
