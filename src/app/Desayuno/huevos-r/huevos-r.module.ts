import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuevosRPageRoutingModule } from './huevos-r-routing.module';

import { HuevosRPage } from './huevos-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuevosRPageRoutingModule
  ],
  declarations: [HuevosRPage]
})
export class HuevosRPageModule {}
