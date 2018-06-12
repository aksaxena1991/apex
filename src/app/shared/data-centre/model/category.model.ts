export interface CategoryModel {
  category_id?: number;
  category_name: string;
  parent_category_id?: number;
  category_description: string;
  date: Date;
}

export class Category implements CategoryModel {
  category_id;
  category_name = '';
  parent_category_id = 0;
  category_description = '';
  date = new Date();
}
