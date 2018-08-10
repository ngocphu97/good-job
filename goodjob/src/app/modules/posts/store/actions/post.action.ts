import { Action } from '@ngrx/store';
import { Post } from '../../models';

export const GET_POSTS = '[POSTS] Get Posts';
export const GET_POSTS_SUCCESS = '[POSTS] Get Posts Success';
export const GET_POSTS_FAILURE = '[POSTS] Get Posts Failure';

export const GET_POST_BY_ID = '[POSTS] Get Post By Id';
export const GET_POST_BY_ID_SUCCESS = '[POSTS] Get Post By Id Success';
export const GET_POST_BY_ID_FAILURE = '[POSTS] Get Post By Id Failure';

export const CREATE_POST = '[POSTS] Create Post';
export const CREATE_POST_SUCCESS = '[POSTS] Create Post Success';
export const CREATE_POST_FAILURE = '[POSTS] Create Post Failure';

export const UPDATE_POST = '[POSTS] Update Post';
export const UPDATE_POST_SUCCESS = '[POSTS] Update Post Success';
export const UPDATE_POST_FAILURE = '[POSTS] Update Post Failure';

export const DELETE_POST = '[POSTS] Delete Post';
export const DELETE_POST_SUCCESS = '[POSTS] Delete Post Success';
export const DELETE_POST_FAILURE = '[POSTS] Delete Post Failure';

export class GetPosts implements Action {
  readonly type = GET_POSTS;

  constructor(public payload?: any) {
  }
}

export class GetPostsSuccess implements Action {
  readonly type = GET_POSTS_SUCCESS;

  constructor(public payload: { posts: Array<Post> }) {
  }
}

export class GetPostsFailure implements Action {
  readonly type = GET_POSTS_FAILURE;

  constructor(public payload?: { error: any }) {
  }
}

export class GetPostById implements Action {
  readonly type = GET_POST_BY_ID;

  constructor(public payload: { id: number }) {
  }
}

export class GetPostByIdSuccess implements Action {
  readonly type = GET_POST_BY_ID_SUCCESS;

  constructor(public payload: { post: Post }) {
  }
}

export class GetPostByIdFailure implements Action {
  readonly type = GET_POST_BY_ID_FAILURE;

  constructor(public payload?: { error: any }) {
  }
}

export class CreatePost implements Action {
  readonly type = CREATE_POST;

  constructor(public payload: { post: Post }) {
  }
}

export class CreatePostSuccess implements Action {
  readonly type = CREATE_POST_SUCCESS;

  constructor(public payload: { post: Post }) {
  }
}

export class CreatePostFailure implements Action {
  readonly type = CREATE_POST_FAILURE;

  constructor(public payload?: { error: any }) {
  }
}

export class UpdatePost implements Action {
  readonly type = UPDATE_POST;

  constructor(public payload: { post: Post }) {
  }
}

export class UpdatePostSuccess implements Action {
  readonly type = UPDATE_POST_SUCCESS;

  constructor(public payload: { post: Post }) {
  }
}

export class UpdatePostFailure implements Action {
  readonly type = UPDATE_POST_FAILURE;

  constructor(public payload?: { error: any }) {
  }
}

export class DeletePost implements Action {
  readonly type = DELETE_POST;

  constructor(public payload: { id: number }) {
  }
}

export class DeletePostSuccess implements Action {
  readonly type = DELETE_POST_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class DeletePostFailure implements Action {
  readonly type = DELETE_POST_FAILURE;

  constructor(public payload?: { error: any }) {
  }
}

export type PostActions =
  | GetPosts | GetPostsSuccess | GetPostsFailure
  | GetPostById | GetPostByIdSuccess | GetPostByIdFailure
  | CreatePost | CreatePostSuccess | CreatePostFailure
  | UpdatePost | UpdatePostSuccess | UpdatePostFailure
  | DeletePost | DeletePostSuccess | DeletePostFailure;
