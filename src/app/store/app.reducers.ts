import { ActionReducerMap } from '@ngrx/store';
import * as fromNav from './nav/nav.reducers';
import * as fromAuth from './auth/auth.reducers';

export interface AppState {
  nav: fromNav.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  nav: fromNav.NavReducer,
  auth: fromAuth.AuthReducer
};
