import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SopacarPage } from './sopacar.page';

const routes: Routes = [
  {
    path: '',
    component: SopacarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SopacarPageRoutingModule {}
