import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../../services/backend.service';
import {ActivatedRoute} from '@angular/router';
import {Shop, SponceredItemRule} from '../../../models/model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  shop: Shop;
  sponceredItemRule: SponceredItemRule;
  loading: boolean = true;
  constructor(private backendService: BackendService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const shopId: string = this.route.snapshot.paramMap.get('shopId');
    const id: string = this.route.snapshot.paramMap.get('id');
    this.getSmartCategory(shopId, id);
  }

  getSmartCategory(shopId: string, id: string) {
    const apiKey = localStorage.getItem('apiKey');
    this.backendService.getShop(shopId).subscribe(
      response => {
        this.shop = response;
        // tslint:disable-next-line:triple-equals
        this.sponceredItemRule = this.shop.sponceredItemRuleList.find(rule => rule.id === id);
        this.loading = false;
      }
    );
  }

  onSubmit($event: any) {
    this.backendService.saveShop(this.shop).subscribe(
      response => {
          console.log('shop saved');
      },
      error => {
        console.log('shop error  ' + JSON.stringify(error));
      }
    );
  }
}
