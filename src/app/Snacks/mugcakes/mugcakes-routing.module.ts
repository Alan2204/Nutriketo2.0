import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MugcakesPage } from './mugcakes.page';

const routes: Routes = [
  {
    path: '',
    component: MugcakesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MugcakesPageRoutingModule {}
