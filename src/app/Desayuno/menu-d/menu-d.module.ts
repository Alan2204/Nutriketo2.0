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
<<<<<<< HEAD
    MenuDPageRoutingModule
=======
    MenuDPageRoutingModule,
>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570
  ],
  declarations: [MenuDPage]
})
export class MenuDPageModule {}
