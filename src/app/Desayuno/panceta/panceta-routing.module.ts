import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PancetaPage } from './panceta.page';

const routes: Routes = [
  {
    path: '',
    component: PancetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PancetaPageRoutingModule {}
