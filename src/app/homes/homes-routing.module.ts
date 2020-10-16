import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomesPage } from './homes.page';

const routes: Routes = [
  {
    path: '',
    component: HomesPage
  },
  {
    path: ':adminId',
    loadChildren: () => import('./home-detail/home-detail.module').then( m => m.HomeDetailPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomesPageRoutingModule {}
