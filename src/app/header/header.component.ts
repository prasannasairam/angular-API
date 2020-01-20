import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // logo = "../../assets/images/logo.png"

  constructor(private UserService: UserService) { }

  ngOnInit() {
  }
logout(){
this.UserService.destroy();
firebase.auth().signOut();
}
}
