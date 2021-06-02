import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PapitasPageRoutingModule } from './papitas-routing.module';

import { PapitasPage } from './papitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PapitasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PapitasPage]
})
export class PapitasPageModule {}
