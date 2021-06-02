import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PollofritoPageRoutingModule } from './pollofrito-routing.module';

import { PollofritoPage } from './pollofrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PollofritoPageRoutingModule
  ],
  declarations: [PollofritoPage]
})
export class PollofritoPageModule {}
