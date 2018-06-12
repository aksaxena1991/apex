import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {ProductModel} from '../model/product.model';

@Injectable()
export class ProductService extends BaseService {

  constructor() {
    super();
  }

  getProducts() {
    return this.connection.select<ProductModel>({
      from: 'Products'
    });
  }

  addProduct(product: ProductModel) {
    console.log(product);
    return this.connection.insert<ProductModel>({
      into: 'Products',
      return: true, // as id is autoincrement, so we would like to get the inserted value
      values: [product]
    });
  }

  deleteProduct(productsId: number) {
    return this.connection.remove({
      from: 'Products',
      where: {
        product_id: productsId
      }
    });
  }
  getProductByProductNameAndCategoryId(product_name, category_id) {
    return this.connection.select<ProductModel>({
      from: 'Products',
      where: {
        product_name: product_name,
        category_id: category_id
      }
    });
  }
  updateProduct(productsId, updateValue: ProductModel) {
    console.log(typeof productsId);
    return this.connection.update({
      in: 'Products',
      where: {
        product_id: productsId
      },
      set: updateValue
    });
  }

  getProduct(productsId: number) {
    return this.connection.select<ProductModel>({
      from: 'Products',
      where: {
        product_id: productsId
      }
    });
  }
  getProductsByCategoryId(categoryId) {
    return this.connection.select<ProductModel>({
      from: 'Products',
      where: {
        category_id: categoryId
      }
    });
  }

}
