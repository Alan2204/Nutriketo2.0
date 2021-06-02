import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CenaPage } from './cena.page';

const routes: Routes = [
  {
    path: '',
    component: CenaPage
  },
  {
    path: 'huevos-v',
    loadChildren: () => import('./huevos-v/huevos-v.module').then( m => m.HuevosVPageModule)
  },
  {
    path: 'huevos-c',
    loadChildren: () => import('./huevos-c/huevos-c.module').then( m => m.HuevosCPageModule)
  },
  {
    path: 'ham',
    loadChildren: () => import('./ham/ham.module').then( m => m.HamPageModule)
  },
  {
    path: 'ensaatun',
    loadChildren: () => import('./ensaatun/ensaatun.module').then( m => m.EnsaatunPageModule)
  },
  {
    path: 'col',
    loadChildren: () => import('./col/col.module').then( m => m.ColPageModule)
  },
  {
    path: 'sopacar',
    loadChildren: () => import('./sopacar/sopacar.module').then( m => m.SopacarPageModule)
  },
  {
    path: 'pastelc',
    loadChildren: () => import('./pastelc/pastelc.module').then( m => m.PastelcPageModule)
  },
  {
    path: 'pizza',
    loadChildren: () => import('./pizza/pizza.module').then( m => m.PizzaPageModule)
  },
  {
    path: 'ensaladak',
    loadChildren: () => import('./ensaladak/ensaladak.module').then( m => m.EnsaladakPageModule)
  },
  {
    path: 'cham',
    loadChildren: () => import('./cham/cham.module').then( m => m.ChamPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CenaPageRoutingModule {}
