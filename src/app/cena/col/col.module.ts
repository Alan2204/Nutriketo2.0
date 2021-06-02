import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColPageRoutingModule } from './col-routing.module';

import { ColPage } from './col.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ColPage]
})
export class ColPageModule {}
