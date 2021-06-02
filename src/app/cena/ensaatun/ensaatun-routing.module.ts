import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnsaatunPage } from './ensaatun.page';

const routes: Routes = [
  {
    path: '',
    component: EnsaatunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnsaatunPageRoutingModule {}
