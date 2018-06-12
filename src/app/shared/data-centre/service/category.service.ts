import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {CategoryModel} from '../model/category.model';

@Injectable()
export class CategoryService extends BaseService {

  constructor() {
    super();
  }

  getCategories() {
    return this.connection.select<CategoryModel>({
      from: 'Categories'
    });
  }

  addCategory(category: CategoryModel) {
    return this.connection.insert<CategoryModel>({
      into: 'Categories',
      return: true, // as id is autoincrement, so we would like to get the inserted value
      values: [category]
    });
  }

  deleteCategory(categoryId: number) {
    return this.connection.remove({
      from: 'Categories',
      where: {
        category_id: categoryId
      }
    });
  }
  getCategoryByCategoryName(category_name: string) {
    return this.connection.select<CategoryModel>({
      from: 'Categories',
      where: {
        category_name: category_name
      }
    });
  }
  updateCategory(categoryId: number, updateValue: CategoryModel) {
    return this.connection.update({
      in: 'Categories',
      where: {
        category_id: categoryId
      },
      set: updateValue
    });
  }

  getCategory(categoryId: number) {
    return this.connection.select<CategoryModel>({
      from: 'Categories',
      where: {
        category_id: categoryId
      }
    });
  }

}
