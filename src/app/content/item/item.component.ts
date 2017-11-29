import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { WorkItem } from '../../shared/models/work-item.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../store/auth/auth.reducers';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/distinctUntilChanged';
import {AuthService} from '../../store/auth/auth.service';

@Component({
  selector: 'app-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {

  @Input() item: WorkItem;
  @ViewChild('name') name: ElementRef; nameSubscription: Subscription;
  @ViewChild('desc') desc: ElementRef; descSubscription: Subscription;
  @ViewChild('url') url: ElementRef; urlSubscription: Subscription;
  @ViewChild('img') img: ElementRef; imgSubscription: Subscription;
  authSubscription: Subscription;
  inputSubscriptions: Subscription;
  authState: Observable<fromAuth.State>;
  adminMode: boolean;

  constructor(private store: Store<fromApp.AppState>,
              private authService: AuthService) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
    this.authSubscription = this.authState.subscribe((state: fromAuth.State) => {
      this.adminMode = state.adminMode;
    });
    this.inputSubscriptions = this.authService.inputSubscriptions.subscribe(() => {
      this.nameSubscription = Observable.fromEvent(this.name.nativeElement, 'input')
        .map((event: Event) => (<HTMLInputElement>event.target).value)
        .debounceTime(3000)
        .distinctUntilChanged()
        .subscribe((data: string) => {

        });
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
