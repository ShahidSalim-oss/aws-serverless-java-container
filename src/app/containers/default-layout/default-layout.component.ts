import {Component, OnInit} from '@angular/core';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent  implements OnInit{
  public sidebarMinimized = false;
  public navItems = navItems;

  ngOnInit(): void {
    localStorage.setItem('apiKey', 'SiOPBmh2jUeZ6VlRp9ZPjA');
    localStorage.setItem('shopId', 'clientshop1Id');
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }


}
