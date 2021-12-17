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
  getItems(apiKey: string) {
    return this.httpClient.get<Event[]>(QUERY_BASE + '/' + apiKey + '/items?shopId=SiOPBmh2jUeZ6VlRp9ZPjA');
  }

  getItem(apiKey: string, id: string) {
    return this.httpClient.get<Event[]>(QUERY_BASE + '/' + apiKey + '/items?shopId=SiOPBmh2jUeZ6VlRp9ZPjA');
  }

  getUsers(apiKey: string) {
    return this.httpClient.get<Event[]>(QUERY_BASE + '/' + apiKey + '/users?shopId=SiOPBmh2jUeZ6VlRp9ZPjA');
  }

  getUser(apiKey: string, id: string) {
    return this.httpClient.get<Event[]>(QUERY_BASE + '/' + apiKey + '/users' + id + '?shopId=SiOPBmh2jUeZ6VlRp9ZPjA');
  }

  getEvents(apiKey: string) {
    return this.httpClient.get<Event[]>(QUERY_BASE + '/' + apiKey + '/events?shopId=SiOPBmh2jUeZ6VlRp9ZPjA');
  }

  getEvent(apiKey: string, id: string) {
    return this.httpClient.get<Event>(QUERY_BASE + '/' + apiKey + '/events/' + id + '?shopId=SiOPBmh2jUeZ6VlRp9ZPjA');
  }
}
