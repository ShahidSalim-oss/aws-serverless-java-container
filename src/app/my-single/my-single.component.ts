import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-my-single',
  templateUrl: './my-single.component.html',
})
export class MySingleComponent implements OnInit {

  loading:boolean = true;
  singlefriendloading:boolean=true;
  friend: Friend;
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.loading=true;
    this.getFriend();
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
