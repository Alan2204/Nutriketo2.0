import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuevosCPageRoutingModule } from './huevos-c-routing.module';

import { HuevosCPage } from './huevos-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuevosCPageRoutingModule
  ],
  declarations: [HuevosCPage]
})
export class HuevosCPageModule {}
