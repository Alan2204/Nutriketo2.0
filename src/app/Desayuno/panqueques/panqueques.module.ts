import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { PanquequesPageRoutingModule } from './panqueques-routing.module';

import { PanquequesPage } from './panqueques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanquequesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PanquequesPage]
})
export class PanquequesPageModule {}
