import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570

import { IonicModule } from '@ionic/angular';

import { EscalopinesPageRoutingModule } from './escalopines-routing.module';

import { EscalopinesPage } from './escalopines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    EscalopinesPageRoutingModule
=======
    EscalopinesPageRoutingModule,
    ReactiveFormsModule
>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570
  ],
  declarations: [EscalopinesPage]
})
export class EscalopinesPageModule {}
