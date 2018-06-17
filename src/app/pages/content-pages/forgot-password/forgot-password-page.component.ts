import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss']
})

export class ForgotPasswordPageComponent {
  forgotPasswordForm: FormGroup;

  constructor(private _router: Router,
              private _activateRoute: ActivatedRoute) {
    this.forgotPasswordForm = new FormGroup({
      'reg_email': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.forgotPasswordForm);
  }
  onCancel() {
    this.forgotPasswordForm.reset();
  }

  // On login link click
  onLogin() {
    this._router.navigate(['login'], {relativeTo: this._activateRoute.parent});
  }

  // On registration link click
  onRegister() {
    this._router.navigate(['register'], {relativeTo: this._activateRoute.parent});
  }
}
