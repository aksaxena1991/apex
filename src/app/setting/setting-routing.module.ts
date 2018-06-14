import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserProfilePageComponent} from './user-profile/user-profile-page.component';
import {OthersComponent} from './others/others.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        component: UserProfilePageComponent,
        data: {
          title: 'User Profile'
        }
      },
      {
        path: 'app-setting',
        component: OthersComponent,
        data: {
          title: 'App Settings'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {
}
