import * as fromActions from '../actions/unsave-changes.action';

export interface State {
  componentsUnSavedChanges: {};
}

export const initialState: State = {
  componentsUnSavedChanges: null
};

export function reducer(state = initialState, action: fromActions.UnSaveChangesAction): State {
  switch (action.type) {


    case fromActions.SAVED_CHANGES: {
      const unsavedChanges = {
        ...state.componentsUnSavedChanges
      };
      delete unsavedChanges[action.payload];
      return {
        ...state,
        componentsUnSavedChanges: unsavedChanges
      };
    }

    case fromActions.UNSAVED_CHANGES: {
      const unsavedChanges = {
        ...state.componentsUnSavedChanges
      };
      unsavedChanges[action.payload] = action.payload;
      return {
        ...state,
        componentsUnSavedChanges: unsavedChanges
      };
    }

    case fromActions.DISCARD_CHANGES: {
      return {
        ...state,
        componentsUnSavedChanges: null
      };
    }

    default: {
      return state;
    }
  }
}

export const getUnSavedChanges = (state: State) => state.componentsUnSavedChanges;
