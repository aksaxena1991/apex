import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartistModule} from 'ng-chartist';
import { AgmCoreModule } from '@agm/core';
import {UserProfilePageComponent} from './user-profile/user-profile-page.component';
import {SettingRoutingModule} from './setting-routing.module';
import { OthersComponent } from './others/others.component';


@NgModule({
    imports: [
      NgbModule,
        CommonModule,
        FormsModule,
      ReactiveFormsModule,
        ChartistModule,
        AgmCoreModule,
      SettingRoutingModule
    ],
    declarations: [
        UserProfilePageComponent,
        OthersComponent
    ]
})
export class SettingModule { }
