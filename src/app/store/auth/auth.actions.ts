import { Action } from '@ngrx/store';

export const SIGNIN_ADMIN = 'SIGNIN_ADMIN';
export const LOGOUT_ADMIN = 'LOGOUT_ADMIN';
export const SET_TOKEN = 'SET_TOKEN';

export class SigninAdmin implements Action {
  readonly type = SIGNIN_ADMIN;
  // constructor(public payload: string) {}
}

export class LogoutAdmin implements Action {
  readonly type = LOGOUT_ADMIN;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;
  constructor(public payload: string) {}
}

export type AuthActions =
  SigninAdmin |
  LogoutAdmin |
  SetToken;
