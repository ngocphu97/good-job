import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  constructor(private http: HttpClient) { }

  getUserConnectPage(userId): Observable<any> {
    const url = 'http://localhost:3000/tasks';
    return this.http.get(url);
  }

  getPostPendingByPageId(pageId) {
    const url = 'http://localhost:3000/tasks';
    return this.http.get(url);
  }

  getPostById(postId) {
    // get post by id
  }

  notePost(id: any) {
    // note post
  }

  testConnect() {
    const url = 'http://localhost:3000/tasks';
    return this.http.get(url);
  }

  testConnectPost() {
    const url = 'http://localhost:3000/tasks';
    const body = {
      'name': 'hello frome here 123'
    };
    console.log('postig');
    return this.http.post(url, body);
  }

}
