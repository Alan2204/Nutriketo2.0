import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChuletasPageRoutingModule } from './chuletas-routing.module';

import { ChuletasPage } from './chuletas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChuletasPageRoutingModule
  ],
  declarations: [ChuletasPage]
})
export class ChuletasPageModule {}
