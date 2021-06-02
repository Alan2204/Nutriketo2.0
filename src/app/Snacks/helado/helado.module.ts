import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeladoPageRoutingModule } from './helado-routing.module';

import { HeladoPage } from './helado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeladoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HeladoPage]
})
export class HeladoPageModule {}
