import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ViewRoutingModule, routedComponents} from './view-routing.module';
import {ViewComponent} from './view.component';


@NgModule({
  imports: [
    CommonModule,
    ViewRoutingModule
  ],
  declarations: [ ViewComponent, routedComponents ]
})

export class ViewModule { }
