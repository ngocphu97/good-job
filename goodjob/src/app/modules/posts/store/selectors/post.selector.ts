import { createSelector } from '@ngrx/store';

import * as fromRoot from '@app/core/store';
import * as fromFeature from '../reducers';
import * as fromPost from '../reducers/post.reducer';

export const {
  selectIds: selectPostIds,
  selectEntities: selectPostEntities,
  selectAll: selectAllPosts,
  selectTotal: selectTotalPosts,
} = fromPost.adapter.getSelectors(fromFeature.getPostState);

export const selectPostLoading = createSelector(
  fromFeature.getPostState,
  fromPost.getPostLoading
);

export const selectPostDetail = createSelector(
  selectAllPosts,
  fromRoot.selectRouterParams,
  (posts, routerParams) => {

    console.log(routerParams);
    return posts[0];
  }
);

export const selectPostLoaded = createSelector(
  fromFeature.getPostState,
  fromPost.getPostLoaded
);

export const selectPostError = createSelector(
  fromFeature.getPostState,
  fromPost.getError
);
