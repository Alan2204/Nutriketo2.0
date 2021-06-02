import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SopamarPageRoutingModule } from './sopamar-routing.module';

import { SopamarPage } from './sopamar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SopamarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SopamarPage]
})
export class SopamarPageModule {}
