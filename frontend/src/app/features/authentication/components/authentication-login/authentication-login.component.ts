import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {SocialAuthService} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-authentication-login',
  templateUrl: './authentication-login.component.html',
  styleUrl: './authentication-login.component.scss'
})
export class AuthenticationLoginComponent {
  constructor(public router: Router, private authService: SocialAuthService) {
  }

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      console.log(user);
    })
  }
}
