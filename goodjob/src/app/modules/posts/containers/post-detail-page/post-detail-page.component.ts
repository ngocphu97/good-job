import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';
import { Post } from '../../models';

@Component({
  selector: 'app-post-detail-page',
  templateUrl: './post-detail-page.component.html',
  styleUrls: ['./post-detail-page.component.css']
})
export class PostDetailPageComponent implements OnInit {
  post$: Observable<Post>;
  loading$: Observable<boolean>;

  constructor(private router: Router,
              private store: Store<fromStore.PostState>) {
    this.post$ = this.store.select(fromStore.selectPostDetail);
    this.loading$ = this.store.select(fromStore.selectPostLoading);

    this.store.dispatch(new fromStore.GetPosts());
  }

  ngOnInit() {
  }

}
