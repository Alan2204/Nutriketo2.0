import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { ChipcalabazaPageRoutingModule } from './chipcalabaza-routing.module';

import { ChipcalabazaPage } from './chipcalabaza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChipcalabazaPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [ChipcalabazaPage]
})
export class ChipcalabazaPageModule {}
