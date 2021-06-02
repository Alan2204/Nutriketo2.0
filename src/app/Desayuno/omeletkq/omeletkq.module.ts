import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OmeletkqPageRoutingModule } from './omeletkq-routing.module';

import { OmeletkqPage } from './omeletkq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OmeletkqPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OmeletkqPage]
})
export class OmeletkqPageModule {}
