import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    // tslint:disable-next-line:variable-name
    private _authService: AuthService
  ) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this._authService.login();
  }

}
