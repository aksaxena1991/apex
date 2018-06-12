import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../shared/data-centre/service/category.service';
import { CategoryModel} from '../../../shared/data-centre/model/category.model';
import {ToastrService} from '../../../shared/services/toastr.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})

export class EditCategoryComponent implements OnInit {
  regularForm: FormGroup;
  categoryList: Array<CategoryModel> = [];
  oldCategory: CategoryModel;

  ngOnInit() {
    this.allCategories();
  }

  constructor(private _categoryService: CategoryService,
              private _router: Router,
              private _toastrService: ToastrService) {
    this.getCategory(parseInt(_router['url'].split('/')[3]));
  }
  getCategory(id) {
    this._categoryService.getCategory(id).then(res => {
      if (res ) {
        this.oldCategory = res[0];
        console.log(this.oldCategory);
        this.regularForm = new FormGroup({
          'category_name': new FormControl(this.oldCategory.category_name, [Validators.required]),
          'parent_category_id': new FormControl(this.oldCategory.category_id, [Validators.required]),
          'category_description': new FormControl(this.oldCategory.category_description, [Validators.required])
        });
      } else {
        this._toastrService.showToastyMessage({
          type: 'error', message: 'Category does not exist!'
        });
        this._router.navigate(['invertory', 'add-category']);
      }
    }).
      catch(error => {
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
    const obj: CategoryModel = {
      'category_name': this.regularForm.value.category_name,
      'parent_category_id': parseInt(this.regularForm.value.parent_category_id, 10),
      'category_description': this.regularForm.value.category_description,
      'date': new Date()
    };
    this._categoryService.updateCategory(this.oldCategory.category_id, obj).then(res => {
      if (res) {
        this._toastrService.showToastyMessage({type: 'success', message: 'A category has been updated!'});
      }
    }).catch(error => {
      console.log(error);
    });
  }


}
