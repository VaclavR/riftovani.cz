import { NavItem } from '../shared/models/nav-item.model';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AboutSiteComponent } from './modals/about-site.component';
import { AboutMeComponent } from './modals/about-me.component';
import { HelpComponent } from './modals/help.component';
import { Subscription } from 'rxjs/Subscription';
import * as NavActions from '../store/nav/nav.actions';
import * as AuthActions from '../store/auth/auth.actions';
import * as fromNav from '../store/nav/nav.reducers';
import * as fromAuth from '../store/auth/auth.reducers';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  navSubscription: Subscription;
  authSubscription: Subscription;
  navItems: NavItem[];
  navState: Observable<fromNav.State>;
  authState: Observable<fromAuth.State>;
  adminMode: boolean;
  showForm: boolean;
  isCollapsed = true;

  constructor(private store: Store<fromApp.AppState>,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.navState = this.store.select('nav');
    this.navSubscription = this.navState.subscribe((state) => {
      this.navItems = state.navItems;
      this.showForm = state.showForm;
    });
    this.authState = this.store.select('auth');
    this.authSubscription = this.authState.subscribe((state) => {
      this.adminMode = state.adminMode;
    });
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.showForm) {
      if (event.keyCode === 27) {
        this.store.dispatch(new NavActions.ShowForm(false));
      }
    }
  }

  showAdminForm() {
    this.store.dispatch(new NavActions.ShowForm(true));
  }

  onLogout() {
    this.store.dispatch(new NavActions.ShowForm(false));
    this.store.dispatch(new AuthActions.LogoutAdmin());
  }

  openModal(component: string) {
    switch (component) {
      case 'About Site':
        this.modalService.show(AboutSiteComponent);
        break;
      case 'About Me':
        this.modalService.show(AboutMeComponent);
        break;
      case 'Help':
        this.modalService.show(HelpComponent);
        break;
    }
  }

  ngOnDestroy() {
    this.navSubscription.unsubscribe();
  }

}
