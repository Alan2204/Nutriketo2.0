import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnsaatunPageRoutingModule } from './ensaatun-routing.module';

import { EnsaatunPage } from './ensaatun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnsaatunPageRoutingModule
  ],
  declarations: [EnsaatunPage]
})
export class EnsaatunPageModule {}
