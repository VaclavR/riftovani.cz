import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { WorkItem } from './shared/models/work-item.model';
import * as firebase from 'firebase';
import * as NavActions from './store/nav/nav.actions';
import * as fromApp from './store/app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  workItemsObject: any;
  workItemsArray = [];

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDaWx7sXKH3el9ce_z4Au4rb6lkusaU7mE',
      authDomain: 'riftovani.firebaseapp.com',
      databaseURL: 'https://riftovani.firebaseio.com',
      projectId: 'riftovani',
      storageBucket: 'riftovani.appspot.com',
      messagingSenderId: '4272404123'
    });
    const database = firebase.database().ref('workItems');
    database.on('value', (snapshot) => {
      this.workItemsArray = [];
      this.workItemsObject = snapshot.val();
      for (const key in this.workItemsObject) {
        if (this.workItemsObject.hasOwnProperty(key)) {
          this.workItemsArray.push(this.workItemsObject[key]);
        }
      }
      this.store.dispatch(new NavActions.SaveFetchedData(this.workItemsArray));
    });
  }

}
