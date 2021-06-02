import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChamPage } from './cham.page';

const routes: Routes = [
  {
    path: '',
    component: ChamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChamPageRoutingModule {}
