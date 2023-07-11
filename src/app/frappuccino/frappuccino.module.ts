import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrappuccinoPageRoutingModule } from './frappuccino-routing.module';

import { FrappuccinoPage } from './frappuccino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrappuccinoPageRoutingModule
  ],
  declarations: [FrappuccinoPage]
})
export class FrappuccinoPageModule {}
