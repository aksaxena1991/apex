import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AddCategoryComponent} from './category/add-category/add-category.component';
import {EditCategoryComponent} from './category/edit-category/edit-category.component';
import {ViewCategoryComponent} from './category/view-category/view-category.component';

import {AddProductComponent} from './product/add-product/add-product.component';
import {EditProductComponent} from './product/edit-product/edit-product.component';
import {ViewProductComponent} from './product/view-product/view-product.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add-category',
        component: AddCategoryComponent,
        data: {
          title: 'Add Categories'
        }
      },
      {
        path: 'edit-category/:id',
        component: EditCategoryComponent,
        data: {
          title: 'Edit Category'
        }
      },
      {
        path: 'view-category',
        component: ViewCategoryComponent,
        data: {
          title: 'View Category'
        }
      },
      {
        path: 'add-product',
        component: AddProductComponent,
        data: {
          title: 'Add Product'
        }
      },
      {
        path: 'edit-product/:id',
        component: EditProductComponent,
        data: {
          title: 'Edit Product'
        }
      },
      {
        path: 'view-product',
        component: ViewProductComponent,
        data: {
          title: 'View Product'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {
}
