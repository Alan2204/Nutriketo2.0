import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastelcPageRoutingModule } from './pastelc-routing.module';

import { PastelcPage } from './pastelc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastelcPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PastelcPage]
})
export class PastelcPageModule {}
