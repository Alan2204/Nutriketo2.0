import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmeletkqPage } from './omeletkq.page';

const routes: Routes = [
  {
    path: '',
    component: OmeletkqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OmeletkqPageRoutingModule {}
