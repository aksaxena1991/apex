import { Routes, RouterModule } from '@angular/router';
// import {} from '../';
// Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'inventory',
    loadChildren: './inventory/inventory.module#InventoryModule'
  },

  {
    path: 'ordering',
    loadChildren: './ordering/ordering.module#OrderingModule'
  },
  {
    path: 'setting',
    loadChildren: './setting/setting.module#SettingModule'
  }
];
