import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuSPageRoutingModule } from './menu-s-routing.module';

import { MenuSPage } from './menu-s.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuSPageRoutingModule
  ],
  declarations: [MenuSPage]
})
export class MenuSPageModule {}
