import { Component, Input, OnInit } from '@angular/core';
import { WorkItem } from '../../store/models/work-item.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../store/auth/auth.reducers';

@Component({
  selector: 'app-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: WorkItem;
  authSubscription: Subscription;
  authState: Observable<fromAuth.State>;
  adminMode: boolean;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
    this.authSubscription = this.authState.subscribe((state: fromAuth.State) => {
      this.adminMode = state.adminMode;
    });
  }

  onChanged(value: string) {
    console.log(this.item[value]);
  }
}
