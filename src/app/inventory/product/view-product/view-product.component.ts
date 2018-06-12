import {Component, ViewEncapsulation} from '@angular/core';
import {CategoryService} from '../../../shared/data-centre/service/category.service';
import {ToastrService} from '../../../shared/services/toastr.service';
import {Router} from '@angular/router';
import {ProductService} from '../../../shared/data-centre/service/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewProductComponent {
  productList: any;

  constructor(private _categoryService: CategoryService,
              private _productService: ProductService,
              private _toastrService: ToastrService,
              private _router: Router) {
    this.allProducts();
  }

  allProducts() {
    this._productService.getProducts().then(productResponse => {
      if (productResponse.length > 0) {
        this.productList = [];
        productResponse.forEach(element => {
          this._categoryService.getCategory(parseInt(element.category_id)).then(res => {
            this.productList.push({
              category_name: res[0].category_name,
              product_name: element.product_name,
              product_id: element.product_id,
              product_price_per_unit: element.product_price_per_unit,
              product_qty: element.product_qty
            });
            this._toastrService.showToastyMessage({
              type: 'success',
              message: 'Products are found.'
            });
          }).catch(error => {
            console.log(error);
          });
        });
      } else {
        this._toastrService.showToastyMessage({
          type: 'error',
          message: 'Product are not found.'
        });
      }
    }).catch(error => {
      console.log(error);
    });
  }

  onDeleteConfirm(id) {
    if (window.confirm('Are you sure you want to delete?')) {
      this._productService.deleteProduct(id).then(res => {
        if (res) {
          this._toastrService.showToastyMessage({
            type: 'success',
            message: 'Product has been deleted successfully!'
          });
          this.allProducts();
        } else {
          this._toastrService.showToastyMessage({
            type: 'error',
            message: 'Unable to delete product, try later!'
          });
        }
      }).catch(error => {
        console.log(error);
      });
    } else {
      this._toastrService.showToastyMessage({
        type: 'warning',
        message: 'You have rejected to delete category!'
      });
    }
  }

}
