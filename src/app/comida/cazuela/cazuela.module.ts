import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CazuelaPageRoutingModule } from './cazuela-routing.module';

import { CazuelaPage } from './cazuela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CazuelaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CazuelaPage]
})
export class CazuelaPageModule {}
