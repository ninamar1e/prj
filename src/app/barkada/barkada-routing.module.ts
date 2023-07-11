import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarkadaPage } from './barkada.page';

const routes: Routes = [
  {
    path: '',
    component: BarkadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarkadaPageRoutingModule {}
