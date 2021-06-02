import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OmelettePPageRoutingModule } from './omelette-p-routing.module';

import { OmelettePPage } from './omelette-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OmelettePPageRoutingModule
  ],
  declarations: [OmelettePPage]
})
export class OmelettePPageModule {}
