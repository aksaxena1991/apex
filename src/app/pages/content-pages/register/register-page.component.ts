import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/data-centre/service/auth.service';
import {ToastrService} from '../../../shared/services/toastr.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent {
  regularForm: FormGroup;

  constructor(private _authService: AuthService,
              private _router: Router,
              private _toastrService: ToastrService) {
    this.regularForm = new FormGroup({
      'reg_username': new FormControl(null, [Validators.required]),
      'reg_password': new FormControl(null, [Validators.required]),
      'reg_email': new FormControl(null, [Validators.email, Validators.required])
    });
  }

  onSubmit(evt) {
    if (navigator.onLine) {
      this._authService.onlineRegister(this.regularForm.value).subscribe(res => {
          if (res.code === 200) {
            this._authService.offLineRegister(this.regularForm.value).then(result => {
              if (result['length'] > 0) {

                this._toastrService.showToastyMessage({
                  type: 'success',
                  message: 'Thank you for registering in APEX BILLING!'
                });
                this._router.navigate(['pages', 'login']);

              } else {
                this._toastrService.showToastyMessage({
                  type: 'error',
                  message: 'This username & email already exist!'
                });
              }
            });
          } else {
            this._toastrService.showToastyMessage({
              type: 'error',
              message: 'This username & email already exist!'
            });
          }
        }
      );
    } else {
      this._toastrService.showToastyMessage({
        type: 'error',
        message: 'Internet Connection Not Found!'
      });
    }
  }
}
