import { Injectable } from '@angular/core';
import {CONSOLE_BASE, QUERY_BASE} from '../app.constant';
import {HttpClient} from '@angular/common/http';
import {Client, Event, Item, Shop, User} from '../models/model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient, ) { }


  // Query
  getItems(apiKey: string) {
    return this.httpClient.get<Item[]>(QUERY_BASE + '/' + apiKey + '/items?shopId=SiOPBmh2jUeZ6VlRp9ZPjA');
  }

  getItem(apiKey: string, id: string) {
    return this.httpClient.get<Item>(QUERY_BASE + '/' + apiKey + '/items/' + id + '?shopId=SiOPBmh2jUeZ6VlRp9ZPjA');
  }

  getUsers(apiKey: string) {
    return this.httpClient.get<User[]>(QUERY_BASE + '/' + apiKey + '/users?shopId=SiOPBmh2jUeZ6VlRp9ZPjA');
  }

  getUser(apiKey: string, id: string) {
    return this.httpClient.get<User>(QUERY_BASE + '/' + apiKey + '/users/' + id + '?shopId=SiOPBmh2jUeZ6VlRp9ZPjA');
  }

  getEvents(apiKey: string) {
    return this.httpClient.get<Event[]>(QUERY_BASE + '/' + apiKey + '/events?shopId=SiOPBmh2jUeZ6VlRp9ZPjA');
  }

  getEvent(apiKey: string, id: string) {
    return this.httpClient.get<Event>(QUERY_BASE + '/' + apiKey + '/events/' + id + '?shopId=SiOPBmh2jUeZ6VlRp9ZPjA');
  }

  getClient(): Observable<Client> {
    return this.httpClient.get<Client>(CONSOLE_BASE + '/client');
  }

  getShop(id: string): Observable<Shop> {
    return this.httpClient.get<Shop>(CONSOLE_BASE + '/shops/' + id);
  }

  saveShop(shop: Shop) {
    console.log(JSON.stringify(shop.sponceredItemRuleList));
    return this.httpClient.post<Shop>(CONSOLE_BASE + '/shops/', JSON.stringify(shop));
  }
}
