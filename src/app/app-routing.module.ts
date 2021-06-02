import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//El  primer routing que se ve en pantalla es el que hace redireccion hacia la pantalla de inicio.
const routes: Routes = [
  {
    path:'',
    redirectTo: 'inicio',
    pathMatch:'full'
  },

  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },

  {
    path: 'menu-d',
    loadChildren: () => import('./Desayuno/menu-d/menu-d.module').then( m => m.MenuDPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'menu-s',
    loadChildren: () => import('./Snacks/menu-s/menu-s.module').then( m => m.MenuSPageModule)
  },
  {
    path: 'omeletkq',
    loadChildren: () => import('./Desayuno/omeletkq/omeletkq.module').then( m => m.OmeletkqPageModule)
  },
  {
    path: 'pannacotta',
    loadChildren: () => import('./Snacks/pannacotta/pannacotta.module').then( m => m.PannacottaPageModule)
  },
  {
    path: 'frittata',
    loadChildren: () => import('./Desayuno/frittata/frittata.module').then( m => m.FrittataPageModule)
  },
  {
    path: 'huevos-r',
    loadChildren: () => import('./Desayuno/huevos-r/huevos-r.module').then( m => m.HuevosRPageModule)
  },
  {
    path: 'huevos-c',
    loadChildren: () => import('./Desayuno/huevos-c/huevos-c.module').then( m => m.HuevosCPageModule)
  },
  {
    path: 'omelette-p',
    loadChildren: () => import('./Desayuno/omelette-p/omelette-p.module').then( m => m.OmelettePPageModule)
  },
  {
    path: 'panceta',
    loadChildren: () => import('./Desayuno/panceta/panceta.module').then( m => m.PancetaPageModule)
  },
  {
    path: 'panqueques',
    loadChildren: () => import('./Desayuno/panqueques/panqueques.module').then( m => m.PanquequesPageModule)
  },
  {
    path: 'sandwich',
    loadChildren: () => import('./Desayuno/sandwich/sandwich.module').then( m => m.SandwichPageModule)
  },
  {
    path: 'sandwichl',
    loadChildren: () => import('./Desayuno/sandwichl/sandwichl.module').then( m => m.SandwichlPageModule)
  },
  {
    path: 'tostadas',
    loadChildren: () => import('./Desayuno/tostadas/tostadas.module').then( m => m.TostadasPageModule)
  },
  {
    path: 'alfajores',
    loadChildren: () => import('./Snacks/alfajores/alfajores.module').then( m => m.AlfajoresPageModule)
  },
  {
    path: 'chipcalabaza',
    loadChildren: () => import('./Snacks/chipcalabaza/chipcalabaza.module').then( m => m.ChipcalabazaPageModule)
  },
  {
    path: 'chips',
    loadChildren: () => import('./Snacks/chips/chips.module').then( m => m.ChipsPageModule)
  },
  {
    path: 'cookies',
    loadChildren: () => import('./Snacks/cookies/cookies.module').then( m => m.CookiesPageModule)
  },
  {
    path: 'helado',
    loadChildren: () => import('./Snacks/helado/helado.module').then( m => m.HeladoPageModule)
  },
  {
    path: 'hummus',
    loadChildren: () => import('./Snacks/hummus/hummus.module').then( m => m.HummusPageModule)
  },
  {
    path: 'mugcakes',
    loadChildren: () => import('./Snacks/mugcakes/mugcakes.module').then( m => m.MugcakesPageModule)
  },
  {
    path: 'papitas',
    loadChildren: () => import('./Snacks/papitas/papitas.module').then( m => m.PapitasPageModule)
  },
  {
    path: 'pasteltresleches',
    loadChildren: () => import('./Snacks/pasteltresleches/pasteltresleches.module').then( m => m.PasteltreslechesPageModule)
  },
  {
    path: 'cena',
    loadChildren: () => import('./cena/cena.module').then( m => m.CenaPageModule)
  },
  {
    path: 'comida',
    loadChildren: () => import('./comida/comida.module').then( m => m.ComidaPageModule)
  },
<<<<<<< HEAD
  {
    path: 'galeria',
    loadChildren: () => import('./galeria/galeria.module').then( m => m.GaleriaPageModule)
  },
=======
>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
