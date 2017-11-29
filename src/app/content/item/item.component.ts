import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { WorkItem } from '../../shared/models/work-item.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../store/auth/auth.reducers';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/distinctUntilChanged';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css']
})

export class ItemComponent implements OnInit, OnDestroy {

  @Input() item: WorkItem;
  authState: Observable<fromAuth.State>;
  authSubscription: Subscription;
  adminMode: boolean;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
    this.authSubscription = this.authState.subscribe((state: fromAuth.State) => {
      this.adminMode = state.adminMode;
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
