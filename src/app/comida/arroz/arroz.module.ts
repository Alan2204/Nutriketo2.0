import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570

import { IonicModule } from '@ionic/angular';

import { ArrozPageRoutingModule } from './arroz-routing.module';

import { ArrozPage } from './arroz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    ArrozPageRoutingModule
=======
    ArrozPageRoutingModule,
    ReactiveFormsModule
>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570
  ],
  declarations: [ArrozPage]
})
export class ArrozPageModule {}
