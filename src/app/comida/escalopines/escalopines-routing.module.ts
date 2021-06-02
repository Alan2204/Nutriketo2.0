import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscalopinesPage } from './escalopines.page';

const routes: Routes = [
  {
    path: '',
    component: EscalopinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscalopinesPageRoutingModule {}
