import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuDPageRoutingModule } from './menu-d-routing.module';

import { MenuDPage } from './menu-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuDPageRoutingModule
  ],
  declarations: [MenuDPage]
})
export class MenuDPageModule {}
