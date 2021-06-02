import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComidaPage } from './comida.page';

const routes: Routes = [
  {
    path: '',
    component: ComidaPage
  },
  {
    path: 'arroz',
    loadChildren: () => import('./arroz/arroz.module').then( m => m.ArrozPageModule)
  },
  {
    path: 'cazuela',
    loadChildren: () => import('./cazuela/cazuela.module').then( m => m.CazuelaPageModule)
  },
  {
    path: 'chuletas',
    loadChildren: () => import('./chuletas/chuletas.module').then( m => m.ChuletasPageModule)
  },
  {
    path: 'escalopines',
    loadChildren: () => import('./escalopines/escalopines.module').then( m => m.EscalopinesPageModule)
  },
  {
    path: 'hamburguesa',
    loadChildren: () => import('./hamburguesa/hamburguesa.module').then( m => m.HamburguesaPageModule)
  },
  {
    path: 'lasana',
    loadChildren: () => import('./lasana/lasana.module').then( m => m.LasanaPageModule)
  },
  {
    path: 'pescado',
    loadChildren: () => import('./pescado/pescado.module').then( m => m.PescadoPageModule)
  },
  {
    path: 'pollofrito',
    loadChildren: () => import('./pollofrito/pollofrito.module').then( m => m.PollofritoPageModule)
  },
  {
    path: 'revueltorepollo',
    loadChildren: () => import('./revueltorepollo/revueltorepollo.module').then( m => m.RevueltorepolloPageModule)
  },
  {
    path: 'sopamar',
    loadChildren: () => import('./sopamar/sopamar.module').then( m => m.SopamarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComidaPageRoutingModule {}
