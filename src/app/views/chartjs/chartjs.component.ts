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

  friends: Friend[];
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends(){
    this.httpClient.get<any>('https://h2qhxba9hk.execute-api.us-east-1.amazonaws.com/prod/pets').subscribe(
      response => {
        console.log(response);
        this.friends = response;
      }
    );
  }
}
