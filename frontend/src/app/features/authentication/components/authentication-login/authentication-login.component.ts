import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authentication-login',
  templateUrl: './authentication-login.component.html',
  styleUrl: './authentication-login.component.scss'
})
export class AuthenticationLoginComponent {
  constructor(public router: Router) {
  }
}
