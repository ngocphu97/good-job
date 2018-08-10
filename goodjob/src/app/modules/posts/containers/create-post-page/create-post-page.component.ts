import { Component, OnInit } from '@angular/core';
import { Post } from '../../models';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.scss']
})
export class CreatePostPageComponent implements OnInit {

  constructor(private router: Router,
              private store: Store<fromStore.PostState>) {
  }


  ngOnInit() {
  }

  onSave(post: Post): void {
    this.store.dispatch(new fromStore.CreatePost({post: post}));
  }

}
