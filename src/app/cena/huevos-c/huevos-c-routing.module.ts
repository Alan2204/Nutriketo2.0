import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuevosCPage } from './huevos-c.page';

const routes: Routes = [
  {
    path: '',
    component: HuevosCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuevosCPageRoutingModule {}
