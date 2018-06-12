import {Component, ViewEncapsulation} from '@angular/core';
import {CategoryService} from '../../../shared/data-centre/service/category.service';
import {ToastrService} from '../../../shared/services/toastr.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewCategoryComponent {
  categoryList: Array<any>;

  constructor(private _categoryService: CategoryService,
              private _toastrService: ToastrService,
              private _router: Router) {
    this.allCategories();
  }

  allCategories() {
    this._categoryService.getCategories().then(categories => {
      if (categories.length > 0) {
        this.categoryList = [];
        categories.forEach((element) => {
          if (element.parent_category_id > 0) {
            this._categoryService.getCategory(element.parent_category_id).then(obj => {
              this.categoryList.push({
                parent_category_name: obj[0]['category_name'],
                category_name: element.category_name,
                category_id: element.category_id,
                date: element.date,
                category_description: element.category_description
              });
            });
          } else {
            this.categoryList.push({
              parent_category_name: 'No Parent',
              category_name: element.category_name,
              category_id: element.category_id,
              date: element.date,
              category_description: element.category_description
            });
          }
        });
        this._toastrService.showToastyMessage({
          type: 'success',
          message: 'Categories are found.'
        });
      } else {
        this._toastrService.showToastyMessage({
          type: 'error',
          message: 'Categories are not found.'
        });
      }
    }).catch(error => {
      console.log(error.message);
    });
  }

  onDeleteConfirm(id) {
    if (window.confirm('Are you sure you want to delete?')) {
      this._categoryService.deleteCategory(id).then(res => {
        if (res) {
          this._toastrService.showToastyMessage({
            type: 'success',
            message: 'Category has been deleted successfully!'
          });
          this.allCategories();
        } else {
          this._toastrService.showToastyMessage({
            type: 'error',
            message: 'Unable to delete category, try later!'
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
