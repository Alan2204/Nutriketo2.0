import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmelettePPage } from './omelette-p.page';

const routes: Routes = [
  {
    path: '',
    component: OmelettePPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OmelettePPageRoutingModule {}
