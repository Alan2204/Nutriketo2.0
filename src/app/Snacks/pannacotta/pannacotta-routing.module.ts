import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PannacottaPage } from './pannacotta.page';

const routes: Routes = [
  {
    path: '',
    component: PannacottaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PannacottaPageRoutingModule {}
