import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasteltreslechesPageRoutingModule } from './pasteltresleches-routing.module';

import { PasteltreslechesPage } from './pasteltresleches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasteltreslechesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PasteltreslechesPage]
})
export class PasteltreslechesPageModule {}
