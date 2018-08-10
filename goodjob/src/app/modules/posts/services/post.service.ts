import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@app/environment';
import { Post } from '../models';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`${environment.rootApiUrl}/posts`);
  }

  getById(id: number): Observable<Post> {
    return this.http.get<Post>(`${environment.rootApiUrl}/posts/${id}`);
  }

  create(post: Post): Observable<any> {
    return this.http.post(`${environment.rootApiUrl}/posts`, post);
  }

  update(post: Post): Observable<any> {
    return this.http.put(`${environment.rootApiUrl}/posts/${post.id}`, post);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${environment.rootApiUrl}/posts/${id}`);
  }

}
