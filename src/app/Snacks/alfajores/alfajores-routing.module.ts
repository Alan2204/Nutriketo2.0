import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlfajoresPage } from './alfajores.page';

const routes: Routes = [
  {
    path: '',
    component: AlfajoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlfajoresPageRoutingModule {}
