import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';



@NgModule({
  declarations: [
    PrimaryButtonComponent
  ],
  exports: [
    PrimaryButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
