import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SopamarPageRoutingModule } from './sopamar-routing.module';

import { SopamarPage } from './sopamar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SopamarPageRoutingModule
  ],
  declarations: [SopamarPage]
})
export class SopamarPageModule {}
