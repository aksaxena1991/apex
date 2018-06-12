export interface RegisterModel {
  username: string;
  password: string;
  email?: string;
  rememberMe?: boolean;
}
export class Register implements RegisterModel {
  username = '';
  password = '';
  email = '';
  rememberMe = false;
}

