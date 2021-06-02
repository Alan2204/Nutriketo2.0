import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscalopinesPageRoutingModule } from './escalopines-routing.module';

import { EscalopinesPage } from './escalopines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscalopinesPageRoutingModule
  ],
  declarations: [EscalopinesPage]
})
export class EscalopinesPageModule {}
