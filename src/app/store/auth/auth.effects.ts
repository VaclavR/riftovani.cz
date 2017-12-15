import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as firebase from 'firebase';
import * as AuthActions from './auth.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable()
export class AuthEffects {
    @Effect()
    authSignin = this.actions$
    .ofType(AuthActions.TRY_SIGNIN)
    .map((action: AuthActions.TrySignin) => {
      return action.payload;
    })
    .switchMap((password: string) => {
      return fromPromise(firebase.auth().signInWithEmailAndPassword('rys@gmx.us', password));
    })
    .switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token: string) => {
      return [
        {
          type: AuthActions.SIGNIN_ADMIN
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    });

    constructor(private actions$: Actions) {}
}
