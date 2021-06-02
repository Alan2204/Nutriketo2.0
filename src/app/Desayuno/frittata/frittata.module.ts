import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570

import { IonicModule } from '@ionic/angular';

import { FrittataPageRoutingModule } from './frittata-routing.module';

import { FrittataPage } from './frittata.page';

<<<<<<< HEAD
=======


>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    FrittataPageRoutingModule
=======
    FrittataPageRoutingModule,
    ReactiveFormsModule
>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570
  ],
  declarations: [FrittataPage]
})
export class FrittataPageModule {}
