import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnsaladakPageRoutingModule } from './ensaladak-routing.module';

import { EnsaladakPage } from './ensaladak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnsaladakPageRoutingModule
  ],
  declarations: [EnsaladakPage]
})
export class EnsaladakPageModule {}
