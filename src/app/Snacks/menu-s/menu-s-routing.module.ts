import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuSPage } from './menu-s.page';

const routes: Routes = [
  {
    path: '',
    component: MenuSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuSPageRoutingModule {}
