import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/model';
import {ActivatedRoute} from '@angular/router';
import {BackendService} from '../../../services/backend.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  user: User;
  loading: boolean = true;
  constructor(private backendService: BackendService, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.getEvent(id);
  }

  getEvent(id: string) {
    const apiKey = localStorage.getItem('apiKey');
    this.backendService.getUser(apiKey, id).subscribe(
      response => {
        this.user = response;
        this.loading = false;
      }
    );
  }

}
