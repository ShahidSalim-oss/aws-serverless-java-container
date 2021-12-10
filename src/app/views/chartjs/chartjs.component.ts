import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/model';

export class Friend {
  constructor(
    public breed: string,
    public dateOfBirth: Date,
    public id: string,
    public name: string
  ) {
  }
}


@Component({
  templateUrl: './chartjs.component.html'
})
export class HomeComponent implements OnInit {

  loading: boolean = true;
  singlefriendloading: boolean = true;
  event: Event;
  events: Event[];
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getFriends();
    this.getFriend();
  }

  getFriends() {
    this.httpClient.get<any>('http://localhost:8083/convertein/v1/SiOPBmh2jUeZ6VlRp9ZPjA/events?shopId=SiOPBmh2jUeZ6VlRp9ZPjA').subscribe(
      response => {
        console.log(response);
        this.events = response;
        this.loading = false;
      }
    );
  }

  getFriend() {
    this.httpClient.get<any>('http://localhost:8083/convertein/v1/SiOPBmh2jUeZ6VlRp9ZPjA/events?shopId=SiOPBmh2jUeZ6VlRp9ZPjA').subscribe(
      response => {
        console.log(response);
        this.events = response;
        this.singlefriendloading = false;
      }
    );
  }
}
