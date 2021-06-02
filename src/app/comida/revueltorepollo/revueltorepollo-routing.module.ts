import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevueltorepolloPage } from './revueltorepollo.page';

const routes: Routes = [
  {
    path: '',
    component: RevueltorepolloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevueltorepolloPageRoutingModule {}
