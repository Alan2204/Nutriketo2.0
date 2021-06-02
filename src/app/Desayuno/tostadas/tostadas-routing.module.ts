import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TostadasPage } from './tostadas.page';

const routes: Routes = [
  {
    path: '',
    component: TostadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TostadasPageRoutingModule {}
