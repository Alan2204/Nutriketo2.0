import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MugcakesPageRoutingModule } from './mugcakes-routing.module';

import { MugcakesPage } from './mugcakes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MugcakesPageRoutingModule
  ],
  declarations: [MugcakesPage]
})
export class MugcakesPageModule {}
