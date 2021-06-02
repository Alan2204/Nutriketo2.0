import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570

import { IonicModule } from '@ionic/angular';

import { PasteltreslechesPageRoutingModule } from './pasteltresleches-routing.module';

import { PasteltreslechesPage } from './pasteltresleches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    PasteltreslechesPageRoutingModule
=======
    PasteltreslechesPageRoutingModule,
    ReactiveFormsModule
>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570
  ],
  declarations: [PasteltreslechesPage]
})
export class PasteltreslechesPageModule {}
