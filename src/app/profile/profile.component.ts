import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
username = "";
email ="";
location = "";
phonenumber = "";
date="";

noProfile="no user profile data here";
  constructor(private userservice:UserService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(userData => {  //userData callback function
      if(userData){
      let users = this.userservice.get_profile();
      this.username = users.username;
      this.email = users.email;
      this.location = users.location;
      this.phonenumber = users.phonenumber;
      this.date = users.registrationDate;
    
    }else{
        this.noProfile;
      }

  
    })
  }
}
