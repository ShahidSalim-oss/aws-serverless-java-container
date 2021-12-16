import { Injectable } from '@angular/core';
import {QUERY_BASE} from '../app.constant';
import {HttpClient} from '@angular/common/http';
import {Event} from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient, ) { }


  // Query
  getItems() {
    return this.httpClient.get<Event[]>(QUERY_BASE + '/SiOPBmh2jUeZ6VlRp9ZPjA/items?shopId=SiOPBmh2jUeZ6VlRp9ZPjA');
  }

  getUser() {
    return this.httpClient.get<Event[]>(QUERY_BASE + '/SiOPBmh2jUeZ6VlRp9ZPjA/users?shopId=SiOPBmh2jUeZ6VlRp9ZPjA');
  }

  getEvents() {
    return this.httpClient.get<Event[]>(QUERY_BASE + '/SiOPBmh2jUeZ6VlRp9ZPjA/events?shopId=SiOPBmh2jUeZ6VlRp9ZPjA');
  }

  getEvent(id: string) {
    return this.httpClient.get<Event>(QUERY_BASE + '/SiOPBmh2jUeZ6VlRp9ZPjA/events/' + id + '?shopId=SiOPBmh2jUeZ6VlRp9ZPjA');
  }
}
