export interface ProductModel {
  product_id?: number;
  category_id: string;
  product_name: string;
  product_price_per_unit: number;
  product_qty?: string;
}

export class Product implements ProductModel {
  // product_id = '';
  category_id = '';
  product_name = '';
  product_price_per_unit = 0;
  product_qty = '';
}
