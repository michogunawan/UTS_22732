import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminsPage } from './admins.page';

const routes: Routes = [
  {
    path: '',
    component: AdminsPage
  },

  {
    path: 'edit/:adminId',
    loadChildren: () => import('./edit-admin/edit-admin.module').then( m => m.EditAdminPageModule)
  },
  {
    path: 'add-admin',
    loadChildren: () => import('./add-admin/add-admin.module').then( m => m.AddAdminPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminsPageRoutingModule {}
