import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {SettingModel} from '../model/setting.model';

@Injectable()
export class SettingService extends BaseService {

  constructor() {
    super();
  }

  getSettings() {
    return this.connection.select<SettingModel>({
      from: 'Settings'
    });
  }

  addSetting(setting: SettingModel) {
    return this.connection.insert<SettingModel>({
      into: 'Settings',
      return: true, // as id is autoincrement, so we would like to get the inserted value
      values: [setting]
    });
  }

  deleteSetting(settingId: number) {
    return this.connection.remove({
      from: 'Settings',
      where: {
        setting_id: settingId
      }
    });
  }
  getSettingByEmail(reg_email: string) {
    return this.connection.select<SettingModel>({
      from: 'Settings',
      where: {
        registered_email: reg_email
      }
    });
  }
  updateSetting(settingId, updateValue: SettingModel) {
    return this.connection.update({
      in: 'Settings',
      where: {
        setting_id: settingId
      },
      set: updateValue
    });
  }

  getSetting(settingId: number) {
    return this.connection.select<SettingModel>({
      from: 'Settings',
      where: {
        setting_id: settingId
      }
    });
  }
}
