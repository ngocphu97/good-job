import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import { Post } from '../../models';
import { PostService } from '../../services';
import * as fromActions from '../actions/post.action';

@Injectable()
export class PostEffects {

  constructor(private actions$: Actions,
              private postService: PostService) {
  }

  @Effect()
  getPosts = this.actions$.ofType(fromActions.GET_POSTS).pipe(
    map((action: fromActions.GetPosts) => action),
    switchMap(() => {
      return this.postService
        .getAll()
        .pipe(
          map((response: Array<Post>) => new fromActions.GetPostsSuccess({posts: response})),
          catchError((error) => of(new fromActions.GetPostsFailure({error: error})))
        );
    })
  );

  @Effect()
  getPostById$ = this.actions$.ofType(fromActions.GET_POST_BY_ID).pipe(
    map((action: fromActions.GetPostById) => action.payload),
    switchMap((payload) => {
      return this.postService
        .getById(payload.id)
        .pipe(
          map(post => new fromActions.GetPostByIdSuccess({post: post})),
          catchError((error) => of(new fromActions.GetPostByIdFailure({error: error})))
        );
    })
  );

  @Effect()
  createPost$ = this.actions$.ofType(fromActions.CREATE_POST).pipe(
    map((action: fromActions.CreatePost) => action.payload),
    switchMap(payload => {
      return this.postService
        .create(payload.post)
        .pipe(
          map((post: Post) => new fromActions.CreatePostSuccess({post: post})),
          catchError((error) => of(new fromActions.CreatePostFailure({error: error})))
        );
    })
  );

  @Effect()
  updatePost$ = this.actions$.ofType(fromActions.UPDATE_POST).pipe(
    map((action: fromActions.UpdatePost) => action.payload),
    switchMap(payload => {
      return this.postService
        .update(payload.post)
        .pipe(
          map((post) => new fromActions.UpdatePostSuccess({post: post})),
          catchError((error) => of(new fromActions.UpdatePostFailure({error: error})))
        );
    })
  );

  @Effect()
  deletePost$ = this.actions$.ofType(fromActions.DELETE_POST).pipe(
    map((action: fromActions.DeletePost) => action.payload),
    switchMap(payload => {
      return this.postService
        .delete(payload.id)
        .pipe(
          map((res) => new fromActions.DeletePostSuccess(res)),
          catchError((error) => of(new fromActions.DeletePostFailure({error: error})))
        );
    })
  );

}

