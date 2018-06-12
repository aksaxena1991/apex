import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../shared/data-centre/service/category.service';
import {CategoryModel} from '../../../shared/data-centre/model/category.model';
import {ToastrService} from '../../../shared/services/toastr.service';
import { Router} from '@angular/router';
import {ProductModel} from '../../../shared/data-centre/model/product.model';
import {ProductService} from '../../../shared/data-centre/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})

export class EditProductComponent implements OnInit {
  regularForm: FormGroup;
  oldProduct: ProductModel;
  categoryList: Array<CategoryModel> = [];

  ngOnInit() {
    this.allCategories();
  }

  constructor(private _categoryService: CategoryService,
              private _router: Router,
              private _productService: ProductService,
              private _toastrService: ToastrService) {
    this.getProduct(parseInt(_router['url'].split('/')[3]));
  }

  getProduct(id) {
    this._productService.getProduct(id).then(res => {
      if (res) {
        this.oldProduct = res[0];
        this.regularForm = new FormGroup({
          'product_name': new FormControl(this.oldProduct.product_name, [Validators.required]),
          'category_id': new FormControl(this.oldProduct.category_id, [Validators.required]),
          'product_price_per_unit': new FormControl(this.oldProduct.product_price_per_unit, [Validators.required]),
          'product_qty': new FormControl(this.oldProduct.product_qty, [Validators.required])
        });
        console.log(this.regularForm);
      } else {
        this._toastrService.showToastyMessage({
          type: 'error', message: 'Product does not exist!'
        });
        this._router.navigate(['invertory', 'add-product']);
      }
    }).catch(error => {
      console.log(error);
    });
  }

  allCategories() {
    this._categoryService.getCategories().then(categories => {
      this.categoryList = categories;
    }).catch(error => {
      console.log(error.message);
    });
  }

  resetForm() {
    this.regularForm.reset();
  }

  onReactiveFormSubmit() {
    const obj: ProductModel = {
      // 'product_id': this.regularForm.value.product_id,
      'product_name': this.regularForm.value.product_name,
      'category_id': this.regularForm.value.category_id,
      'product_price_per_unit': parseInt(this.regularForm.value.product_price_per_unit, 10),
      'product_qty': this.regularForm.value.product_qty,
      // 'date': new Date()
    };
    this._productService.updateProduct(this.oldProduct.product_id, obj).then(res => {
      if (res) {
        this._toastrService.showToastyMessage({type: 'success', message: 'A product has been updated!'});
      }
    }).catch(error => {
      console.log(error);
    });
  }


}
