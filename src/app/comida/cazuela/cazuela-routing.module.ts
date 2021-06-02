import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CazuelaPage } from './cazuela.page';

const routes: Routes = [
  {
    path: '',
    component: CazuelaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CazuelaPageRoutingModule {}
