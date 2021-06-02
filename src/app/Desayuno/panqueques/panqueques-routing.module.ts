import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanquequesPage } from './panqueques.page';

const routes: Routes = [
  {
    path: '',
    component: PanquequesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanquequesPageRoutingModule {}
