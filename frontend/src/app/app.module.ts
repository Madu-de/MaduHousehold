import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppTranslateModule} from './app-translate.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppTranslateModule,
    TranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
