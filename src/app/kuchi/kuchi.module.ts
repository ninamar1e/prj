import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KuchiPageRoutingModule } from './kuchi-routing.module';

import { KuchiPage } from './kuchi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KuchiPageRoutingModule
  ],
  declarations: [KuchiPage]
})
export class KuchiPageModule {}
