import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as NavActions from '../nav/nav.actions';
import * as AuthActions from './auth.actions';
import * as fromApp from '../app.reducers';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(private store: Store<fromApp.AppState>) {}
  signupAdmin(password: string) {
    firebase.auth().signInWithEmailAndPassword('vaclav.rysavy@tutanota.com', password)
      .then(
        () => {
          this.store.dispatch(new AuthActions.SigninAdmin());
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.store.dispatch(new AuthActions.SetToken(token));
              }
            );
        }
      )
      .catch(
        error => {
          this.store.dispatch(new NavActions.ShowForm(false));
          console.log(error.message);
        }
      );
  }
}
