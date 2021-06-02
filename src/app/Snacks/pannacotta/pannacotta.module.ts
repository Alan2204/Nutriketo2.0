import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PannacottaPageRoutingModule } from './pannacotta-routing.module';

import { PannacottaPage } from './pannacotta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PannacottaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PannacottaPage]
})
export class PannacottaPageModule {}
