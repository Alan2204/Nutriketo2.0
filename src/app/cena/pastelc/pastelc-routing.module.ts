import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastelcPage } from './pastelc.page';

const routes: Routes = [
  {
    path: '',
    component: PastelcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastelcPageRoutingModule {}
