import {Component, OnInit} from '@angular/core';
import {SettingService} from '../../shared/data-centre/service/setting.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from '../../shared/services/toastr.service';


@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {
  doOperation: string;
  currentSetting: any;
  isVissible: boolean;
  accountSettingForm: FormGroup;
  licenceInfoForm: FormGroup;
  taxForm: FormGroup;

  constructor(private _settingService: SettingService,
              private _toasterService: ToastrService) {
    this.isVissible = false;
    this.doOperation = 'Add';
    this.accountSettingForm = new FormGroup({
      'account_holder_name': new FormControl(null, [Validators.required]),
      'bank_name': new FormControl(null, [Validators.required]),
      'account_no': new FormControl(null, [Validators.required]),
      'ifsc_code': new FormControl(null, [Validators.required]),
      'is_paid': new FormControl(false),
      'activation': new FormControl(false)
    });
    this.licenceInfoForm = new FormGroup({
      'licence_no': new FormControl(null, [Validators.required]),
      'valid_from': new FormControl(null, [Validators.required]),
      'valid_to': new FormControl(null, [Validators.required]),
      'is_paid': new FormControl(false),
      'activation': new FormControl(false)
    });
    this.taxForm = new FormGroup({
      'tin_no': new FormControl(null, [Validators.required]),
      'gst_no': new FormControl(null, [Validators.required]),
      'sgst': new FormControl(null, [Validators.required]),
      'cgst': new FormControl(null, [Validators.required]),
      'is_paid': new FormControl(false),
      'activation': new FormControl(false)
    });
    this.currentSetting = {
      'account_holder_name': '',
      'bank_name': '',
      'account_no': '',
      'ifsc_code': '',
      'licence_no': '',
      'valid_from': '',
      'valid_to': '',
      'is_paid': false,
      'activation': false,
      'tin_no': '',
      'gst_no': '',
      'sgst': 0,
      'cgst': 0
    };
  }

  ngOnInit() {
    this.fetchSettings();
  }

  fetchSettings() {
    this._settingService.getSettings().then(res => {
      if (res.length > 0) {
        this.doOperation = 'Update';
        this.currentSetting = res[0];
      } else {
        this.doOperation = 'Add';
      }
      this.isVissible = true;
    }).catch(error => {
      console.log(error);
    });
  }

  saveSettings(formName) {

    switch (this.doOperation) {
      case 'Add':
        this.add(formName);
        break;
      case 'Update':
        this.update(formName);
        break;
    }
  }

  add(formName) {
    const message = {
      success: '',
      error: ''
    };
    let obj = {
      activation: false
    };
    switch (formName) {
      case 'account-settings':
        obj = this.accountSettingForm.value;
        message.success = 'Account Setting has been added!';
        message.error = 'Unable to add account setting, try later!';
        break;
      case 'licence-settings':
        obj = this.licenceInfoForm.value;
        message.success = 'Licence Setting has been added!';
        message.error = 'Unable to add licence setting, try later!';
        break;
      case 'taxation-settings':
        obj = this.taxForm.value;
        message.success = 'Taxation Setting has been added!';
        message.error = 'Unable to add taxation setting, try later!';
        break;
    }
    this._settingService.addSetting(obj).then(res => {
      if (res) {
        this._toasterService.showToastyMessage({
          type: 'success',
          message: message.success
        });
        this.doOperation = 'Update';
      } else {
        this._toasterService.showToastyMessage({
          type: 'error',
          message: message.error
        });
      }
    }).catch(error => {
      console.log(error);
    });
  }

  update(formName) {
    let obj = {};
    const message = {
      success: '',
      error: ''
    };
    switch (formName) {
      case 'account-settings':
        obj = this.accountSettingForm.value;
        message.success = 'Account Setting has been updated!';
        message.error = 'Unable to update account setting, try later!';
        break;
      case 'licence-settings':
        obj = this.licenceInfoForm.value;
        message.success = 'Licence Setting has been updated!';
        message.error = 'Unable to update licence setting, try later!';
        break;
      case 'taxation-settings':
        obj = this.taxForm.value;
        message.success = 'Taxation Setting has been updated!';
        message.error = 'Unable to update taxation setting, try later!';
        break;
    }
    this._settingService.updateSetting(this.currentSetting.setting_id, obj).then(res => {
      if (res) {
        this._toasterService.showToastyMessage({
          type: 'success',
          message: message.success
        });
      } else {
        this._toasterService.showToastyMessage({
          type: 'error',
          message: message.error
        });
      }
    }).catch(error => {
      console.log(error);
    });
  }

}
