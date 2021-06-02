import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PancetaPageRoutingModule } from './panceta-routing.module';

import { PancetaPage } from './panceta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PancetaPageRoutingModule
  ],
  declarations: [PancetaPage]
})
export class PancetaPageModule {}
