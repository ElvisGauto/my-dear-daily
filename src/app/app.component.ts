import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-dear-daily';

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.saveUser();
  }

  saveUser(): void {
    this._authService.user$.subscribe(user => {
      if (user) {
        this._userService.saveUser(user);

        const returnUrl = localStorage.getItem('returnUrl');
        localStorage.removeItem('returnUrl');
        if (returnUrl) {
          this._router.navigateByUrl(returnUrl);
        }
      }
    });
  }
}


