import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandwichlPage } from './sandwichl.page';

const routes: Routes = [
  {
    path: '',
    component: SandwichlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandwichlPageRoutingModule {}
