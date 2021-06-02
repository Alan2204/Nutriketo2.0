import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuevosVPage } from './huevos-v.page';

const routes: Routes = [
  {
    path: '',
    component: HuevosVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuevosVPageRoutingModule {}
