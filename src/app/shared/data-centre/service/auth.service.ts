import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {RegisterModel} from '../model/auth.model';
import {SessionModel} from '../model/session.model';
import {HttpClient} from '@angular/common/http';
import {constants} from '../../constants/app.constants';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService extends BaseService {
  cst = constants;

  constructor(private _http: HttpClient) {
    super();
  }

  doLogin(creds: RegisterModel) {
    return this.connection.select<RegisterModel>({
      from: 'Auth',
      where: {
        username: creds.username,
        password: creds.password
      }
    });
  }
  onlineRegister(creds): Observable<any> {
    return this._http.post(this.cst.serverBaseUrl + 'auth/register', creds);
  }
  offLineRegister(creds) {
    const offCreds = {
      username: creds.reg_username,
      password: creds.reg_password,
      email: creds.reg_email
    };
    return this.connection.insert<RegisterModel>({
      into: 'Auth',
      return: true,
      values: [offCreds]
    });
  }

  getAuth() {
    return this.connection.select<RegisterModel>({
      from: 'Auth'
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
