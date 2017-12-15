import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as AuthActions from '../../store/auth/auth.actions';
import * as fromApp from '../../store/app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-password',
  templateUrl: 'password.component.html',
  styleUrls: ['password.component.css']
})
export class PasswordComponent implements OnInit {
  adminForm: FormGroup;
  kuk: string;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.adminForm = new FormGroup({
      'password': new FormControl(null, [Validators.required])
    });
  }

  onChange() {
    if (this.adminForm.valid) {
      this.store.dispatch(new AuthActions.TrySignin(this.adminForm.value.password));
      this.adminForm.reset();
    }
  }

}
