import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationStartComponent } from './components/authentication-start/authentication-start.component';
import {TranslateModule} from '@ngx-translate/core';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import { AuthenticationLoginComponent } from './components/authentication-login/authentication-login.component';
import { AuthenticationRegisterComponent } from './components/authentication-register/authentication-register.component';
import {SharedModule} from '../../shared/shared.module';
import {GoogleSigninButtonModule} from '@abacritt/angularx-social-login';



@NgModule({
  declarations: [
    AuthenticationStartComponent,
    AuthenticationLoginComponent,
    AuthenticationRegisterComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    AuthenticationRoutingModule,
    SharedModule,
    GoogleSigninButtonModule,
  ],
})
export class AuthenticationModule { }
