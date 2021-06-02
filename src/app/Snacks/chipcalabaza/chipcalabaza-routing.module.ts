import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChipcalabazaPage } from './chipcalabaza.page';

const routes: Routes = [
  {
    path: '',
    component: ChipcalabazaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChipcalabazaPageRoutingModule {}
