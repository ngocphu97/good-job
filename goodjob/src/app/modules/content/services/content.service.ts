import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare var FB: any;

export interface Cat {
  name: string;
}


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

  connectToServer(): Observable<any> {
    return this.http.get('http://localhost:3000/');
  }

  getAllCats(): Observable<any> {
    return this.http.get('http://localhost:3000/api/cats');
  }

  getCat(name: string): Observable<Cat> {
    return this.http.get<Cat>('http://localhost:3000/api/cats/' + name);
  }

  insertCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>('http://localhost:3000/api/cats/', cat);
  }

  updateCat(cat: Cat): Observable<void> {
    return this.http.put<void>('http://localhost:3000/api/cats/' + cat.name, cat);
  }

  deleteCat(name: string) {
    return this.http.delete('http://localhost:3000/api/cats/' + name);
  }
}
