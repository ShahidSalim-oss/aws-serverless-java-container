import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  loading:boolean = true;
  singlefriendloading:boolean=true;
  friend: Friend;
  friends: Friend[];
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.loading=true;
    this.getFriends();
    this.getFriend();
  }

  getFriends(){
    this.httpClient.get<any>('http://dev-back.kioskgrp.com:8080/pets').subscribe(
      response => {
        console.log(response);
        this.friends = response;
        this.loading=false;
      }
    );
  }

  getFriend(){
    this.httpClient.get<any>('https://bb5uqeubxi.execute-api.us-east-1.amazonaws.com/dev/pets/2a0ea1a2-43b6-4383-a746-95a12c86c8e0').subscribe(
      response => {
        console.log(response);
        this.friend = response;
        this.singlefriendloading=false;
      }
    );
  }
}
