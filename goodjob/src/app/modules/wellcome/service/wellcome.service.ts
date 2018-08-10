import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WellcomeService {

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
