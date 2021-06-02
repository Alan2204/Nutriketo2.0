import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollofritoPage } from './pollofrito.page';

const routes: Routes = [
  {
    path: '',
    component: PollofritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PollofritoPageRoutingModule {}
