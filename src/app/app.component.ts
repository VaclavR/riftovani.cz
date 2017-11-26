import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDaWx7sXKH3el9ce_z4Au4rb6lkusaU7mE',
      authDomain: 'riftovani.firebaseapp.com'
    });
  }

}
