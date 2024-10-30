import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationStartComponent} from './components/authentication-start/authentication-start.component';
import {AuthenticationLoginComponent} from './components/authentication-login/authentication-login.component';
import {AuthenticationRegisterComponent} from './components/authentication-register/authentication-register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationStartComponent
  },
  {
    path: 'login',
    component: AuthenticationLoginComponent
  },
  {
    path: 'register',
    component: AuthenticationRegisterComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
