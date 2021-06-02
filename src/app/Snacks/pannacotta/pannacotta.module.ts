import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PannacottaPageRoutingModule } from './pannacotta-routing.module';

import { PannacottaPage } from './pannacotta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PannacottaPageRoutingModule
  ],
  declarations: [PannacottaPage]
})
export class PannacottaPageModule {}
