import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SettingService} from '../../shared/data-centre/service/setting.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from '../../shared/services/toastr.service';
import {Observable} from 'rxjs/Observable';

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

  constructor(private _settingService: SettingService,
              private _toasterService: ToastrService) {
    this.isVissible = false;
    this.doOperation = 'Add';
    this.accountSettingForm = new FormGroup({
      'account_holder_name': new FormControl(null, [Validators.required]),
      'bank_name': new FormControl(null, [Validators.required]),
      'account_no': new FormControl(null, [Validators.required]),
      'ifsc_code': new FormControl(null, [Validators.required]),
      'isPaid': new FormControl(false),
      'activation': new FormControl(false)
    });
    this.currentSetting = {
      'account_holder_name': '',
      'bank_name': '',
      'account_no': '',
      'ifsc_code': ''
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
        console.log(this.currentSetting);
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
    switch (formName) {
      case 'account-settings':
        this._settingService.addSetting(this.accountSettingForm.value).then(res => {
          if (res) {
            this._toasterService.showToastyMessage({
              type: 'success',
              message: 'Account Setting has been added!'
            });
            this.doOperation = 'Update';
          } else {
            this._toasterService.showToastyMessage({
              type: 'error',
              message: 'Unable to add account setting, try later!'
            });
          }
        }).catch(error => {
          console.log(error);
        });
        break;
    }
  }

  update(formName) {
    switch (formName) {
      case 'account-settings':
        this._settingService.updateSetting(this.currentSetting.setting_id, this.accountSettingForm.value).then(res => {
          if (res) {
            this._toasterService.showToastyMessage({
              type: 'success',
              message: 'Account Setting has been updated!'
            });
          } else {
            this._toasterService.showToastyMessage({
              type: 'error',
              message: 'Unable to update account setting, try later!'
            });
          }
        }).catch(error => {
          console.log(error);
        });
        break;
    }
  }

}
