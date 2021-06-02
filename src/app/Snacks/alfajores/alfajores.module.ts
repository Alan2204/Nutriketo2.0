import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlfajoresPageRoutingModule } from './alfajores-routing.module';

import { AlfajoresPage } from './alfajores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlfajoresPageRoutingModule
  ],
  declarations: [AlfajoresPage]
})
export class AlfajoresPageModule {}
