import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HamPageRoutingModule } from './ham-routing.module';

import { HamPage } from './ham.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HamPageRoutingModule
  ],
  declarations: [HamPage]
})
export class HamPageModule {}
