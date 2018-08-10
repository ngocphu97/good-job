import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPosts from './post.reducer';

export const featureName = 'postState';

export interface PostState {
  posts: fromPosts.State;
}

export const reducers: ActionReducerMap<PostState> = {
  posts: fromPosts.reducer,
};

export const getFeatureState = createFeatureSelector<PostState>(featureName);

export const getPostState = createSelector(
  getFeatureState,
  state => state.posts
);

