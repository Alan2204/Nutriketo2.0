import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TostadasPageRoutingModule } from './tostadas-routing.module';

import { TostadasPage } from './tostadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TostadasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TostadasPage]
})
export class TostadasPageModule {}
