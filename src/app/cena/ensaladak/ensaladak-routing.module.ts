import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnsaladakPage } from './ensaladak.page';

const routes: Routes = [
  {
    path: '',
    component: EnsaladakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnsaladakPageRoutingModule {}
