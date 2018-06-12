import {Component, OnInit} from '@angular/core';
import {AuthService} from '../data-centre/service/auth.service';
import {ToastrService} from '../services/toastr.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private _authService: AuthService,
              private _toastrService: ToastrService,
              private _router: Router) {
  }

  logout() {
    const token = sessionStorage.getItem('authorization');
    this._authService.doLogout(token).then(res => {
      if (res) {
        this._router.navigate(['pages', 'login']);
        this._toastrService.showToastyMessage({
          type: 'success',
          message: 'Thank you for visiting.'
        });
        sessionStorage.clear();
      } else {
        this._toastrService.showToastyMessage({
          type: 'error',
          message: 'Unable to logout!'
        });
      }
    }).catch(error => {
      console.log(error);
    });
  }
}
