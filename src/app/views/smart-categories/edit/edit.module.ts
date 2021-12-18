import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {EditRoutingModule, routedComponents} from './edit-routing.module';
import {EditComponent} from './edit.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    EditRoutingModule,
    FormsModule
  ],
  declarations: [ EditComponent, routedComponents ]
})

export class EditModule { }
