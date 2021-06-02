import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChamPageRoutingModule } from './cham-routing.module';

import { ChamPage } from './cham.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChamPageRoutingModule
  ],
  declarations: [ChamPage]
})
export class ChamPageModule {}
