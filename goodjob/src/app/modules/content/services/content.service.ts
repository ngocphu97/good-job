import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  connectAccount = [];

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get('http://localhost:3000/clients');
  }

  getClientPosts(): Observable<any> {
    return this.http.get('http://localhost:3000/client_post');
  }

  getClientById(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/clients?clientId=${id}`);
  }

  getClientPostByClientDate(date: string): Observable<any> {
    return this.http.get(`http://localhost:3000/client_post?date=${date}`);
  }
}
