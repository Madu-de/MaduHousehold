import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationLayoutComponent } from './authentication-layout/authentication-layout.component';
import {AppRoutingModule} from '../app-routing.module';



@NgModule({
  declarations: [
    AuthenticationLayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }
