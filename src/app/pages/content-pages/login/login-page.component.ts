import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../shared/data-centre/service/auth.service';
import {ToastrService} from '../../../shared/services/toastr.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

  regularForm: FormGroup;

  constructor(private _router: Router,
             private _toastrService: ToastrService, private _authService: AuthService) {
    this.regularForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'rememberMe': new FormControl(false)
    });
  }
  ngOnInit() {
    this._authService.getAuth().then(res => {
      if (res.length === 0) {
        this._authService.doRegister({username: 'aksaxena1991', password: '1234'});
      }
    }).catch(error => {
      console.log(error);
    });
  }
  // On submit button click
  onSubmit() {
    this._authService.doLogin(this.regularForm.value).then(res => {
      if (res.length > 0) {
        this._authService.createSession(this.regularForm.value).then(res => {
          if (res) {
            this._router.navigate(['dashboard']);
          } else {
            this._toastrService.showToastyMessage({type: 'error',
            message: 'Unable to login, try later!'});
          }
        }).catch(error => {
          console.log(error);
        });
      } else {
        this._toastrService.showToastyMessage({type: 'error',
        message: 'Username or Password is invalid!'});
      }
    }).catch(error => {
      console.log(error);
    });
    // console.log(this.regularForm);
  }

  // On Forgot password link click
  onForgotPassword() {
  }

  // On registration link click
  onRegister() {
    // this.router.navigate(['register'], { relativeTo: this.route.parent });
  }

  reset() {
    this.regularForm.reset();
  }
}
