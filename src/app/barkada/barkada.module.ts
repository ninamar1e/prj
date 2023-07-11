import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarkadaPageRoutingModule } from './barkada-routing.module';

import { BarkadaPage } from './barkada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarkadaPageRoutingModule
  ],
  declarations: [BarkadaPage]
})
export class BarkadaPageModule {}
