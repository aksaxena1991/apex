import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from '../../../shared/services/toastr.service';
import {ProductService} from '../../../shared/data-centre/service/product.service';
import {CategoryService} from '../../../shared/data-centre/service/category.service';
import {CategoryModel} from '../../../shared/data-centre/model/category.model';
import {ProductModel} from '../../../shared/data-centre/model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {
  regularForm: FormGroup;
  categoryList: Array<CategoryModel> = [];
  ngOnInit() {
    this.allCategories();
  }

  constructor(private _toastrService: ToastrService,
              private _categoryService: CategoryService,
              private _productService: ProductService) {
    this.regularForm = new FormGroup({
      'product_name': new FormControl(null, [Validators.required]),
      'category_id': new FormControl(null, [Validators.required]),
      'product_price_per_unit': new FormControl(null, [Validators.required]),
      'product_qty': new FormControl(null)
    });
    console.log(this.regularForm);
  }

  resetForm() {
    this.regularForm.reset();
  }

  onReactiveFormSubmit() {
    this._productService.getProductByProductNameAndCategoryId(this.regularForm.value.product_name, this.regularForm.value.category_id).
      then(res => {
    if (res.length <= 0) {
      const obj: ProductModel = {
        category_id: this.regularForm.value.category_id,
        product_name: this.regularForm.value.product_name,
        product_price_per_unit: this.regularForm.value.product_price_per_unit,
        product_qty: this.regularForm.value.product_qty,
      };
      this._productService.addProduct(obj).then(res => {
        if (res) {
          this._toastrService.showToastyMessage({
            type: 'success',
            message: 'A new product has been added!'
          });
        } else {
          this._toastrService.showToastyMessage({
            type: 'error',
            message: 'Unable to add product, try later!'
          });
        }
        this.regularForm.reset();
      }).catch(error => {
        console.log(error);
      });
    } else {
      this._toastrService.showToastyMessage({
        type: 'error',
        message: 'Product already exist.'
      });
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


}
