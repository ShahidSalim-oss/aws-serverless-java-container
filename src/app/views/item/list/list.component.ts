import { Component, OnInit } from '@angular/core';
import {Event, Item} from '../../../models/model';
import {BackendService} from '../../../services/backend.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  items: Item[];
  loading: boolean = true;
  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    const apiKey = localStorage.getItem('apiKey');
    this.backendService.getItems(apiKey).subscribe(
      response => {
        this.items = response;
        this.loading = false;
      }
    );
  }

}
