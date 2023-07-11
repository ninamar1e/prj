import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrappuccinoPage } from './frappuccino.page';

const routes: Routes = [
  {
    path: '',
    component: FrappuccinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrappuccinoPageRoutingModule {}
