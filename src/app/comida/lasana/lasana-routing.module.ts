import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LasanaPage } from './lasana.page';

const routes: Routes = [
  {
    path: '',
    component: LasanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LasanaPageRoutingModule {}
