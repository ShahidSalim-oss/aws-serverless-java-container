import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewComponent} from '../view/view.component';
import {ListComponent} from '../list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }

export const routedComponents = [
  ViewComponent
];
