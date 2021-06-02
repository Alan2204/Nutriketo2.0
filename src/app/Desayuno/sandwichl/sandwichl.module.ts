import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SandwichlPageRoutingModule } from './sandwichl-routing.module';

import { SandwichlPage } from './sandwichl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SandwichlPageRoutingModule
  ],
  declarations: [SandwichlPage]
})
export class SandwichlPageModule {}
