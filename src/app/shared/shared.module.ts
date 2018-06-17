import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { ToggleFullscreenDirective } from './directives/toggle-fullscreen.directive';
import {CategoryService} from './data-centre/service/category.service';
import {ToastrService} from './services/toastr.service';
import {AuthService} from './data-centre/service/auth.service';
import {ProductService} from './data-centre/service/product.service';
import {SettingService} from './data-centre/service/setting.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        CustomizerComponent,
        ToggleFullscreenDirective,
        NgbModule,
      HttpClientModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule
    ],
  providers: [CategoryService, ToastrService, AuthService,
    SettingService,
    ProductService, HttpClient],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        CustomizerComponent,
        ToggleFullscreenDirective
    ]
})
export class SharedModule { }
