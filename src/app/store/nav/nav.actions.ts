import { Action }   from '@ngrx/store';
import { WorkItem } from '../../shared/models/work-item.model';

export const SAVE_FETCHED_DATA = 'SAVE_FETCHED_DATA';
export const SHOW_FORM = 'SHOW_FORM';
export const SET_EDITED_ITEM = 'SET_EDITED_ITEM';

export class SaveFetchedData implements Action {
  readonly type = SAVE_FETCHED_DATA;
  constructor(public payload: {}) {}
}

export class ShowForm implements Action {
  readonly type = SHOW_FORM;
  constructor(public payload: boolean) {}
}

export class SetEditedItem implements Action {
  readonly type = SET_EDITED_ITEM;
  constructor(public payload?: WorkItem) {}
}

export type NavActions =
  SaveFetchedData |
  ShowForm |
  SetEditedItem;
