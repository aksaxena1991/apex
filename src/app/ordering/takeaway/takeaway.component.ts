import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CategoryService} from '../../shared/data-centre/service/category.service';
import {ProductService} from '../../shared/data-centre/service/product.service';
import {ToastrService} from '../../shared/services/toastr.service';
import {Router} from '@angular/router';
import * as _ from 'lodash';
import {SettingService} from '../../shared/data-centre/service/setting.service';
import {SettingModel} from '../../shared/data-centre/model/setting.model';

@Component({
  selector: 'app-takeaway',
  templateUrl: './takeaway.component.html',
  styleUrls: ['./takeaway.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TakeawayComponent implements OnInit {
  data = [];
  searchResults = new Set();
  searchdData = [];
  search = '';
  enable = false;
  cartItems = [];
  sum = 0;
  activatedSetting: SettingModel;
  constructor(private _categoryService: CategoryService,
              private _toastrService: ToastrService,
              private _router: Router,
              private _settingService: SettingService,
              private _productService: ProductService) {
  }

  ngOnInit() {
    this.searchIntoTable();
    this._settingService.getSettings().then(res => {
      this.activatedSetting = res[0];
      console.log(this.activatedSetting);
    }).catch(error => {
      console.log(error);
    });

  }

  searchIntoTable() {
    this._productService.getProducts().then(res => {
      if (res.length > 0) {
        this.data = res;
        this._toastrService.showToastyMessage({
          type: 'success',
          message: 'Products are found'
        });
      } else {
        this._toastrService.showToastyMessage({
          type: 'error',
          message: 'Products are not found'
        });
      }
    }).catch(error => {
      console.log(error);
    });
  }

  onSearch(query: string) {
    if (query.length >= 3) {
      this.data.forEach(r => {
        if (r.product_name.toLowerCase().indexOf(query) > -1) {
          this.searchResults.add(r);
        }
      });
    } else {
      this.searchResults = new Set();
    }
    this.searchdData = [];
    for (let it = this.searchResults.values(), val = null; val = it.next().value;) {
      val.qty = 1;
      this.searchdData.push(val);
    }
    if (this.searchdData.length > 0) {
      this.enable = true;
    } else {
      this.enable = false;
    }
  }

  onPrintConfirm(event) {
    let mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(document.getElementById('invoice-template').innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
  }

  collector(sign, evt, item) {
    switch (sign) {
      case '+':
        let index = -1;
        const flag = _.find(this.cartItems, function (o, i) {
          index = i;
          return o.product_id === item.product_id;
        });
        if (!flag) {
          this.cartItems.push({
            product_id: item.product_id,
            product_name: item.product_name,
            product_price_per_unit: item.product_price_per_unit,
            qty: item.qty
          });
        } else {
          this.cartItems[index]['qty']++;
        }
        this._toastrService.showToastyMessage({
          type: 'success',
          message: 'Product added!'
        });
        break;
      case '-':
        if (this.cartItems.length > 0) {
          for (let i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i]['product_id'] === item.product_id) {
              if (this.cartItems[i]['qty'] <= 1) {
                this.cartItems.splice(i, 1);
                this._toastrService.showToastyMessage({
                  type: 'error',
                  message: 'Product removed!'
                });
              } else {
                this.cartItems[i]['qty']--;
              }
            }
          }
        }
        break;
    }
  }
}

