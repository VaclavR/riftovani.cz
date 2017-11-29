import { Action } from '@ngrx/store';
import {WorkItem} from '../../shared/models/work-item.model';

export const SHOW_FORM = 'SHOW_FORM';
export const SAVE_SUBSCRIBED_INPUTS = 'SAVE_SUBSCRIBED_INPUTS';

export class ShowForm implements Action {
  readonly type = SHOW_FORM;
  constructor(public payload: boolean) {}
}

export class SaveSubscribedInputs implements Action {
  readonly type = SAVE_SUBSCRIBED_INPUTS;
  constructor(public payload: WorkItem) {}
}

export type NavActions =
  ShowForm |
  SaveSubscribedInputs;
