import { Component, OnInit } from '@angular/core';
import {Event} from '../../../models/model';
import {ActivatedRoute} from '@angular/router';
import {BackendService} from '../../../services/backend.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  event: Event;
  loading: boolean = true;
  constructor(private backendService: BackendService, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.getEvent(id);
  }

  getEvent(id: string) {
    const apiKey = localStorage.getItem('apiKey');
    this.backendService.getEvent(apiKey, id).subscribe(
      response => {
        this.event = response;
        this.loading = false;
      }
    );
  }

}
