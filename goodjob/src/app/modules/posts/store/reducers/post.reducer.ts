import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Post } from '../../models';
import * as fromPosts from '../actions/post.action';

export interface State extends EntityState<Post> {
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const adapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const initialState = adapter.getInitialState({
  loaded: false,
  loading: false,
  error: null
});

export function reducer(state = initialState, action: fromPosts.PostActions): State {
  switch (action.type) {
    case fromPosts.GET_POST_BY_ID:
    case fromPosts.GET_POSTS: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }

    case fromPosts.GET_POSTS_SUCCESS: {
      return adapter.addAll(action.payload.posts, {
        ...state,
        loaded: true,
        loading: false,
        error: null
      });
    }

    case fromPosts.GET_POSTS_FAILURE: {

      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload.error
      };
    }

    case fromPosts.GET_POST_BY_ID_SUCCESS: {
      const update = {id: action.payload.post.id, changes: action.payload.post};
      return adapter.updateOne(update, {
        ...state,
        loading: false,
        loaded: true,
        error: null
      });
    }

    case fromPosts.GET_POST_BY_ID_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload.error
      };
    }

    case fromPosts.CREATE_POST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case fromPosts.CREATE_POST_SUCCESS: {
      return adapter.addOne(action.payload.post, {
        ...state,
        loading: false,
        error: null
      });

    }

    case fromPosts.CREATE_POST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }

    case fromPosts.UPDATE_POST: {
      const update = {id: action.payload.post.id, changes: action.payload.post};
      return adapter.updateOne(update, {
        ...state,
        loading: true,
        error: null
      });
    }

    case fromPosts.UPDATE_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null
      };
    }

    case fromPosts.UPDATE_POST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }

    case fromPosts.DELETE_POST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case fromPosts.DELETE_POST_SUCCESS: {
      return adapter.removeOne(action.payload.id, {
        ...state,
        loading: false,
        error: null,
      });
    }

    case fromPosts.DELETE_POST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }

    default: {
      return state;
    }
  }
}

export const getPostLoading = (state: State) => state.loading;
export const getPostLoaded = (state: State) => state.loaded;
export const getError = (state: State) => state.error;
