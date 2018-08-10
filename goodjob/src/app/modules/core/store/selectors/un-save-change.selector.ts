import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUnSavedChanges from '@app/core/store/reducers/unsave-changes.reducer';

export const selectUnSavedChangesState = createFeatureSelector<fromUnSavedChanges.State>('unSavedChanges');

export const selectComponentsUnSavedChanges = createSelector(
  selectUnSavedChangesState,
  (state: fromUnSavedChanges.State) => state.componentsUnSavedChanges
);
