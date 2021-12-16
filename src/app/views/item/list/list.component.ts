import { Component, OnInit } from '@angular/core';
import {Item} from '../../../models/model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private httpClient: any;
  private items: Item[];
  private itemsReady: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.getItems();
  }


  getItems() {
    this.itemsReady = false;
    // @ts-ignore
    this.httpClient.get<any>('http://localhost:8083/convertein/v1/SiOPBmh2jUeZ6VlRp9ZPjA/events?shopId=SiOPBmh2jUeZ6VlRp9ZPjA').subscribe(
      response => {
        console.log(response);
        this.items = response;
        this.itemsReady = true;
      }
    );
  }

}
