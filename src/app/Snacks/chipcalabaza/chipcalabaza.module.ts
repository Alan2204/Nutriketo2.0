import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChipcalabazaPageRoutingModule } from './chipcalabaza-routing.module';

import { ChipcalabazaPage } from './chipcalabaza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChipcalabazaPageRoutingModule
  ],
  declarations: [ChipcalabazaPage]
})
export class ChipcalabazaPageModule {}
