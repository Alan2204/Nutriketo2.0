import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChuletasPage } from './chuletas.page';

const routes: Routes = [
  {
    path: '',
    component: ChuletasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChuletasPageRoutingModule {}
