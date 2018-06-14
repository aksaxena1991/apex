import {IdbService} from './idb.service';
import {IDataBase, DATA_TYPE, ITable} from 'jsstore';
import {Table} from 'jsstore/dist/ts/codes/worker/model/table';

export class BaseService {
  dbname = 'Apex_Billing_Application';

  constructor() {
    // turn on jsstore log status - help you to debug
    // turn off it in production or when you dont need
    this.connection.setLogStatus(true);
    this.initJsStore();
  }

  get connection() {
    return IdbService.idbCon;
  }

  initJsStore() {
    this.connection.isDbExist(this.dbname).then(isExist => {
      if (isExist) {
        this.connection.openDb(this.dbname);
      } else {
        const dataBase = this.getDatabase();
        this.connection.createDb(dataBase);
      }
    }).catch(err => {
      // this will be fired when indexedDB is not supported.
      alert(err.message);
    });
  }

  private getDatabase() {
    const authTable: ITable = {
      name: 'Auth',
      columns: [
        {
          name: 'auth_id',
          primaryKey: true,
          autoIncrement: true
        },
        {
          name: 'username',
          notNull: true,
          dataType: DATA_TYPE.String
        },
        {
          name: 'password',
          notNull: true,
          dataType: DATA_TYPE.String
        },
        {
          name: 'email',
          notNull: false,
          dataType: DATA_TYPE.String
        },
        {
          name: 'rememberMe',
          notNull: false,
          dataType: DATA_TYPE.Boolean
        }]
    };
    const categoryTable: ITable = {
      name: 'Categories',
      columns: [{
        name: 'category_id',
        primaryKey: true,
        autoIncrement: true
      },
        {
          name: 'category_name',
          notNull: true,
          dataType: DATA_TYPE.String
        },
        {
          name: 'category_description',
          dataType: DATA_TYPE.String,
          default: 'male'
        },
        {
          name: 'parent_category_id',
          notNull: true,
          dataType: DATA_TYPE.Number
        }
      ]
    };
    const settingTable: ITable = {
      name: 'Settings',
      columns: [{
        name: 'setting_id',
        primaryKey: true,
        autoIncrement: true
      },
        {
          name: 'licence_no',
          notNull: false,
          dataType: DATA_TYPE.String
        },
        {
          name: 'is_paid',
          notNull: true,
          dataType: DATA_TYPE.Boolean
        },
        {
          name: 'tin_no',
          notNull: false,
          dataType: DATA_TYPE.String
        },
        {
          name: 'gst_no',
          notNull: false,
          dataType: DATA_TYPE.String
        },
        {
          name: 'valid_from',
          notNull: false,
          dataType: DATA_TYPE.String
        },
        {
          name: 'valid_to',
          notNull: false,
          dataType: DATA_TYPE.String
        },
        {
          name: 'activation',
          notNull: true,
          dataType: DATA_TYPE.Boolean
        },
        {
          name: 'logo',
          notNull: false,
          dataType: DATA_TYPE.String
        },
        {
          name: 'address',
          notNull: false,
          dataType: DATA_TYPE.String
        },
        {
          name: 'registered_email',
          notNull: false,
          dataType: DATA_TYPE.String
        },
        {
          name: 'bank_name',
          notNull: false,
          dataType: DATA_TYPE.String
        },
        {
          name: 'ifsc_code',
          notNull: false,
          dataType: DATA_TYPE.String
        },
        {
          name: 'account_no',
          notNull: false,
          dataType: DATA_TYPE.String
        },
        {
          name: 'account_holder_name',
          notNull: false,
          dataType: DATA_TYPE.String
        },
        {
          name: 'cgst',
          notNull: false,
          dataType: DATA_TYPE.Number
        },
        {
          name: 'sgst',
          notNull: false,
          dataType: DATA_TYPE.Number
        }]
    }
    const sessionTable: ITable = {
      name: 'Sessions',
      columns: [{
        name: 'session_id',
        primaryKey: true,
        autoIncrement: true
      },
        {
          name: 'session_key',
          notNull: true,
          dataType: DATA_TYPE.String
        }]
    };
    const productTable: ITable = {
      name: 'Products',
      columns: [{
        name: 'product_id',
        primaryKey: true,
        autoIncrement: true
      },
        {
          name: 'category_id',
          notNull: true,
          dataType: DATA_TYPE.String
        },
        {
          name: 'product_name',
          notNull: true,
          dataType: DATA_TYPE.String
        },
        {
          name: 'product_price_per_unit',
          notNull: true,
          dataType: DATA_TYPE.Number
        },
        {
          name: 'product_qty',
          notNull: true,
          dataType: DATA_TYPE.Number
        }]
    };
    const dataBase: IDataBase = {
      name: this.dbname,
      tables: [
        authTable,
        categoryTable,
        sessionTable,
      productTable,
      settingTable]
    };
    return dataBase;
  }
}
