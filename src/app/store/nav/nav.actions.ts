import { Action } from '@ngrx/store';

export const SHOW_FORM = 'SHOW_FORM';

export class ShowForm implements Action {
  readonly type = SHOW_FORM;
  constructor(public payload: boolean) {}
}

export type NavActions =
  ShowForm;
