import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {RegisterModel} from '../model/auth.model';
import {SessionModel} from '../model/session.model';

@Injectable()
export class AuthService extends BaseService {

  constructor() {
    super();
  }
  doLogin(creds: RegisterModel) {
    console.log(creds);
    return this.connection.select<RegisterModel>({
      from: 'Auth',
      where: {
        username: creds.username,
        password: creds.password
      }
    });
  }
  doRegister(creds: RegisterModel) {
    return this.connection.insert<RegisterModel>({
      into: 'Auth',
      return: true,
      values: [creds]
    });
  }
  createSession(creds: RegisterModel) {
    const token = btoa(creds.username + ':' + creds.password);
    sessionStorage.setItem('authorization', token);
    return this.connection.insert<SessionModel>({
      into: 'Sessions',
      return: true,
      values: [{session_key: token}]
    });
  }
  checkSession(token) {
    return this.connection.select<SessionModel>({
      from: 'Sessions',
      where: {
        session_key: token
      }
    });
  }
  doLogout(sessionKey: string) {
    return this.connection.remove({
      from: 'Sessions',
      where: {
        session_key: sessionKey
      }
    });
  }

}
