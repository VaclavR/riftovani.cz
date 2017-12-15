import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { WorkItem }                            from '../../shared/models/work-item.model';
import { Store }                               from '@ngrx/store';
import { Observable }                          from 'rxjs/Observable';
import {Subscription}     from 'rxjs/Subscription';
import { FormComponent }  from '../modal/form.component';
import { BsModalService } from 'ngx-bootstrap';
import * as fromApp       from '../../store/app.reducers';
import * as fromAuth      from '../../store/auth/auth.reducers';
import * as NavActions    from '../../store/nav/nav.actions';
import * as firebase      from 'firebase';

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

  constructor(private store: Store<fromApp.AppState>,
              private modalService: BsModalService) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
    this.authSubscription = this.authState.subscribe((state: fromAuth.State) => {
      this.adminMode = state.adminMode;
    });
  }

  onDelete() {
    const deleteDatabaseRef = firebase.database().ref('workItems/' + this.item.name);
    const deleteStorageRef = firebase.storage().ref('thumbnails/' + this.item.name);
    deleteDatabaseRef.remove();
    deleteStorageRef.delete();
  }

  openModalForm() {
    this.store.dispatch(new NavActions.SetEditedItem(this.item));
    this.modalService.show(FormComponent);
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
