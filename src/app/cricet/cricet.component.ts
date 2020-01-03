import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cricet',
  templateUrl: './cricet.component.html',
  styleUrls: ['./cricet.component.css']
})
export class CricetComponent implements OnInit {
  private playerUrl =
    "https://cricapi.com/api/playerStats?apikey=1D6ppYK5u0cDXu44ZkY3oLssVMf1&pid=";
  constructor(private http: HttpClient) {}
  playerInfo;

  searchPlayer(pid) {
    this.http.get<any>(`${this.playerUrl}${pid}`).subscribe(user => {
      this.playerInfo = user;
    });
  }

  ngOnInit() {
  }

}
