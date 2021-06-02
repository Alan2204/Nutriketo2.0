import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuevosRPage } from './huevos-r.page';

const routes: Routes = [
  {
    path: '',
    component: HuevosRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuevosRPageRoutingModule {}
