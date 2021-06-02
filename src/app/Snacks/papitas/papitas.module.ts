import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PapitasPageRoutingModule } from './papitas-routing.module';

import { PapitasPage } from './papitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PapitasPageRoutingModule
  ],
  declarations: [PapitasPage]
})
export class PapitasPageModule {}
