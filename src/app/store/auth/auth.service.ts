import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import * as NavActions from '../nav/nav.actions';
import * as AuthActions from './auth.actions';
import * as fromApp from '../app.reducers';
import * as firebase from 'firebase';
import {Subject} from 'rxjs/Subject';
import set = Reflect.set;

@Injectable()
export class AuthService {
  inputSubscriptions = new Subject<void>();

  constructor(private store: Store<fromApp.AppState>,
              private http: HttpClient) {}

  signupAdmin(password: string) {
    firebase.auth().signInWithEmailAndPassword('rys@gmx.us', password)
      .then(
        () => {
          this.store.dispatch(new AuthActions.SigninAdmin());
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.store.dispatch(new AuthActions.SetToken(token));
                setTimeout(() => {this.inputSubscriptions.next(); }, 0);
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

  saveChanges(data: any) {
    const url = 'https://riftovani.firebaseio.com/data.json';
    this.http.put(url, data);
  }
}
