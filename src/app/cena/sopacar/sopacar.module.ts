import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SopacarPageRoutingModule } from './sopacar-routing.module';

import { SopacarPage } from './sopacar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SopacarPageRoutingModule
  ],
  declarations: [SopacarPage]
})
export class SopacarPageModule {}
