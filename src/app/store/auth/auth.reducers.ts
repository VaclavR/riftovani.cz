import * as AuthActions from './auth.actions';

export interface State {
  token: string;
  adminMode: boolean;
}

const initialState = {
  token: null,
  adminMode: false
};

export function AuthReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case (AuthActions.SIGNIN_ADMIN):
      return {
        ...state,
        adminMode: true
      };
    case (AuthActions.LOGOUT_ADMIN):
      return {
        ...state,
        token: null,
        adminMode: false
      };
    case (AuthActions.SET_TOKEN):
      return {
        ...state,
        token: action.payload
      };

    default:
      return state;
  }
}
