import { Component, OnInit } from '@angular/core';
import {Event, User} from '../../../models/model';
import {BackendService} from '../../../services/backend.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  users: User[];
  loading: boolean = true;
  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    const apiKey = localStorage.getItem('apiKey');
    this.backendService.getUsers(apiKey).subscribe(
      response => {
        this.users = response;
        this.loading = false;
      }
    );
  }

}
