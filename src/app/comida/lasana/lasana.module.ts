import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LasanaPageRoutingModule } from './lasana-routing.module';

import { LasanaPage } from './lasana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LasanaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LasanaPage]
})
export class LasanaPageModule {}
