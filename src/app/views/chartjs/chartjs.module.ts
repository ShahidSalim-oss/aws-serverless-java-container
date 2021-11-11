import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './chartjs.component';
import { ChartJSRoutingModule, routedComponents } from './chartjs-routing.module';

@NgModule({
  imports: [
    ChartJSRoutingModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ HomeComponent, routedComponents ]
})
export class ChartJSModule { }
