import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570

import { IonicModule } from '@ionic/angular';

import { ChuletasPageRoutingModule } from './chuletas-routing.module';

import { ChuletasPage } from './chuletas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    ChuletasPageRoutingModule
=======
    ChuletasPageRoutingModule,
    ReactiveFormsModule
>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570
  ],
  declarations: [ChuletasPage]
})
export class ChuletasPageModule {}
