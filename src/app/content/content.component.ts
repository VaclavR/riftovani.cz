import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { WorkItem } from '../store/models/work-item.model';
import * as fromApp from '../store/app.reducers';
import * as fromNav from '../store/nav/nav.reducers';
import * as fromAuth from '../store/auth/auth.reducers';
import { Subscription } from 'rxjs/Subscription';
import { BsModalService } from 'ngx-bootstrap';
import { FormComponent } from './modal/form.component';

@Component({
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {

  navSubscription: Subscription;
  authSubscription: Subscription;
  navState: Observable<fromNav.State>;
  authState: Observable<fromAuth.State>;
  workItems: WorkItem[];
  adminMode: boolean;

  constructor(private store: Store<fromApp.AppState>,
              private modalService: BsModalService) {}

  ngOnInit() {
    this.navState = this.store.select('nav');
    this.navSubscription = this.navState.subscribe((state: fromNav.State) => {
      this.workItems = state.workItems;
    });
    this.authState = this.store.select('auth');
    this.authSubscription = this.authState.subscribe((state: fromAuth.State) => {
      this.adminMode = state.adminMode;
    });
  }

  openModalForm() {
    this.modalService.show(FormComponent);
  }

  ngOnDestroy() {
    this.navSubscription.unsubscribe();
    this.authSubscription.unsubscribe();
  }
}
