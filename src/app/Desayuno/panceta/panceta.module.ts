import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570

import { IonicModule } from '@ionic/angular';

import { PancetaPageRoutingModule } from './panceta-routing.module';

import { PancetaPage } from './panceta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    PancetaPageRoutingModule
=======
    PancetaPageRoutingModule,
    ReactiveFormsModule
>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570
  ],
  declarations: [PancetaPage]
})
export class PancetaPageModule {}
