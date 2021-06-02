import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuevosVPageRoutingModule } from './huevos-v-routing.module';

import { HuevosVPage } from './huevos-v.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuevosVPageRoutingModule
  ],
  declarations: [HuevosVPage]
})
export class HuevosVPageModule {}
