import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChipsPageRoutingModule } from './chips-routing.module';

import { ChipsPage } from './chips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChipsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ChipsPage]
})
export class ChipsPageModule {}
