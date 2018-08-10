import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get('http://localhost:3000/clients');
  }

  getClientPost(): Observable<any> {
    return this.http.get('http://localhost:3000/client_post');
  }

  getClientById(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/clients?clientId=${id}`);
  }

  getClientPostByClientDate(date: string): Observable<any> {
    return this.http.get(`http://localhost:3000/client_post?date=${date}`);
  }
}
