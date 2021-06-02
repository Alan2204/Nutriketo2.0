import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HummusPage } from './hummus.page';

const routes: Routes = [
  {
    path: '',
    component: HummusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HummusPageRoutingModule {}
