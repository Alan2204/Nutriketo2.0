import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrittataPageRoutingModule } from './frittata-routing.module';

import { FrittataPage } from './frittata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrittataPageRoutingModule
  ],
  declarations: [FrittataPage]
})
export class FrittataPageModule {}
