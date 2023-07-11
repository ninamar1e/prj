import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KuchiPage } from './kuchi.page';

const routes: Routes = [
  {
    path: '',
    component: KuchiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KuchiPageRoutingModule {}
