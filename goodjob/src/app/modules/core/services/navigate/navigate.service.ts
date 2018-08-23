import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  connectAccount = new Array<any>();

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/clients');
  }

}
