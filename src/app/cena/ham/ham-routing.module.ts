import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HamPage } from './ham.page';

const routes: Routes = [
  {
    path: '',
    component: HamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HamPageRoutingModule {}
