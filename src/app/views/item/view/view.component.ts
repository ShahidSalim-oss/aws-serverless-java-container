import { Component, OnInit } from '@angular/core';
import {Item} from '../../../models/model';
import {ActivatedRoute} from '@angular/router';
import {BackendService} from '../../../services/backend.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  item: Item;
  loading: boolean = true;
  constructor(private backendService: BackendService, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.getEvent(id);
  }

  getEvent(id: string) {
    const apiKey = localStorage.getItem('apiKey');
    this.backendService.getItem(apiKey, id).subscribe(
      response => {
        this.item = response;
        this.loading = false;
      }
    );
  }

}
