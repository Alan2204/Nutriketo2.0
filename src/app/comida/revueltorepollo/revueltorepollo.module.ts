import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevueltorepolloPageRoutingModule } from './revueltorepollo-routing.module';

import { RevueltorepolloPage } from './revueltorepollo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevueltorepolloPageRoutingModule
  ],
  declarations: [RevueltorepolloPage]
})
export class RevueltorepolloPageModule {}
