import { Component, OnInit } from '@angular/core';
import { Event } from '../../../models/model';
import {BackendService} from '../../../services/backend.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  events: Event[];
  loading: boolean = true;
  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    console.log('in list');

    this.backendService.getEvents().subscribe(
      response => {
        console.log(response);
        this.events = response;
        this.loading = false;
      }
    );
  }

}
