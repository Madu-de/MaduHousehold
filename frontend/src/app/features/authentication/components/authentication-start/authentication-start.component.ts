import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authentication-start',
  templateUrl: './authentication-start.component.html',
  styleUrl: './authentication-start.component.scss'
})
export class AuthenticationStartComponent {
  constructor(public router: Router) {
  }
}
