import { Component, OnInit } from '@angular/core';
import {Event, Shop} from '../../../models/model';
import {BackendService} from '../../../services/backend.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  shop: Shop;
  loading: boolean = true;
  constructor(private backendService: BackendService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('shopId');
    this.getShop(id);
  }

  getShop(id: string) {
    const apiKey = localStorage.getItem('apiKey');
    this.backendService.getShop(id).subscribe(
      response => {
        this.shop = response;
        this.loading = false;
      }
    );
  }

}
