export interface SettingModel {
  setting_id?: number;
  licence_no?: string;
  valid_from?: string;
  valid_to?: string;
  activation: boolean;
  isPaid: boolean;
  logo?: string;
  address?: string;
  registered_email?: string;
  bank_name?: string;
  ifsc_code?: string;
  account_no?: string;
  account_holder_name?: string;
  cgst?: string;
  sgst?: string;
}
export class Setting implements SettingModel {
  setting_id = 0 ;
  licence_no = '';
  valid_from = '';
  valid_to = '';
  activation = false;
  isPaid = false;
  registered_email = '';
  logo = '';
  address = '';
  bank_name = '';
  ifsc_code = '';
  account_no = '';
  account_holder_name = '';
  cgst = '';
  sgst = '';
}
