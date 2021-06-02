import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HummusPageRoutingModule } from './hummus-routing.module';

import { HummusPage } from './hummus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HummusPageRoutingModule
  ],
  declarations: [HummusPage]
})
export class HummusPageModule {}
