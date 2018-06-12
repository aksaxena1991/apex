import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../shared/data-centre/service/category.service';
import { CategoryModel} from '../../../shared/data-centre/model/category.model';
import {ToastrService} from '../../../shared/services/toastr.service';

@Component({
  selector: 'app-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})

export class AddCategoryComponent implements OnInit {
  regularForm: FormGroup;
  categoryList: Array<CategoryModel> = [];
  ngOnInit() {
    this.allCategories();
  }

  constructor(private _categoryService: CategoryService, private _toastrService: ToastrService) {
    this.regularForm = new FormGroup({
      'category_name': new FormControl(null, [Validators.required]),
      'parent_category_id': new FormControl(null, [Validators.required]),
      'category_description': new FormControl(null, [Validators.required])
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
    this._categoryService.getCategoryByCategoryName(this.regularForm.value.category_name).then(res => {
      if (res.length > 0) {
        this._toastrService.showToastyMessage({type: 'error', message: 'This category already exist!'});
      } else {
        const obj: CategoryModel = {
          'category_name': this.regularForm.value.category_name,
          'parent_category_id': parseInt(this.regularForm.value.parent_category_id, 10),
          'category_description': this.regularForm.value.category_description,
          'date': new Date()
        };
        this._categoryService.addCategory(obj).then(res => {
          if (res) {
            this._toastrService.showToastyMessage({type: 'success', message: 'A new category has been added!'});
            this.regularForm.reset();
          }
        }).catch(error => {
          console.log(error);
        });
      }
    }).catch(error => {
      console.log(error);
    });
  }


}
