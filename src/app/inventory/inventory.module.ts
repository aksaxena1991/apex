import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {InventoryRoutingModule} from './inventory-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CustomFormsModule} from 'ng2-validation';
import {MatchHeightModule} from '../shared/directives/match-height.directive';

import {AddCategoryComponent} from './category/add-category/add-category.component';
import {EditCategoryComponent} from './category/edit-category/edit-category.component';
import {ViewCategoryComponent} from './category/view-category/view-category.component';

import {AddProductComponent} from './product/add-product/add-product.component';
import {EditProductComponent} from './product/edit-product/edit-product.component';
import {ViewProductComponent} from './product/view-product/view-product.component';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CustomFormsModule,
    MatchHeightModule,
    NgbModule
  ],
  declarations: [
    AddCategoryComponent,
    EditCategoryComponent,
    ViewCategoryComponent,
    AddProductComponent,
    EditProductComponent,
    ViewProductComponent
  ]

})
export class InventoryModule {
}
