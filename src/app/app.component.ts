import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'swiggyapp';
  ngOnInit() {
       // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBSL3xBA76-5y3DkTf8j92TBXcg93DlDhs",
    authDomain: "swiggy-c69af.firebaseapp.com",
    databaseURL: "https://swiggy-c69af.firebaseio.com",
    projectId: "swiggy-c69af",
    storageBucket: "swiggy-c69af.appspot.com",
    messagingSenderId: "439696334420",
    appId: "1:439696334420:web:269c805e34398d9217d7c1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    }

    
  }
  

