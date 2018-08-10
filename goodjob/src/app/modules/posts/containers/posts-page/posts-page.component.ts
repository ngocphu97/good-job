import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';
import { Post } from '../../models';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {
  posts$: Observable<Array<Post>>;
  loading$: Observable<boolean>;

  constructor(private router: Router,
              private store: Store<fromStore.PostState>) {
    this.posts$ = this.store.select(fromStore.selectAllPosts);
    this.loading$ = this.store.select(fromStore.selectPostLoading);

    this.store.dispatch(new fromStore.GetPosts());
  }

  ngOnInit() {
  }

  onRowSelected(post) {
    this.router.navigate(['posts/', post.id]);
  }

}
