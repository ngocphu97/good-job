import { Action } from '@ngrx/store';

export const SAVED_CHANGES = '[SAVED_CHANGES] Save changes';
export const UNSAVED_CHANGES = '[UNSAVED_CHANGES] UnSave changes';
export const DISCARD_CHANGES = '[DISCARD_CHANGES] Discard changes';

export class SaveChanges implements Action {
  readonly type = SAVED_CHANGES;

  constructor(public payload: string) {
  }
}

export class UnSaveChanges implements Action {
  readonly type = UNSAVED_CHANGES;

  constructor(public payload: string) {
  }
}

export class DiscardChanges implements Action {
  readonly type = DISCARD_CHANGES;
}

export type UnSaveChangesAction = SaveChanges | UnSaveChanges | DiscardChanges;
